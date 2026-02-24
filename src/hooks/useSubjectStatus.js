import { useState, useEffect, useMemo } from 'react';

export const useSubjectStatus = (planId, initialSubjects) => {
    const [userStatuses, setUserStatuses] = useState(() => {
        try {
            const savedStr = localStorage.getItem(`fceqyn-status-v3-${planId}`);
            // Only use what this user has explicitly saved — no seeded defaults.
            // New users start with an empty object (all Pendiente).
            return savedStr ? JSON.parse(savedStr) : {};
        } catch (e) {
            console.error("Error loading statuses:", e);
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem(`fceqyn-status-v3-${planId}`, JSON.stringify(userStatuses));
    }, [userStatuses, planId]);

    const cycleStatus = (subjectId) => {
        setUserStatuses(prev => {
            const current = prev[subjectId];
            let nextStatus;

            // Manual cycle strictly: Pendiente (null/Pendiente) -> Regularizada -> Aprobada -> Pendiente
            if (!current || current === 'Pendiente') {
                nextStatus = 'Regularizada';
            } else if (current === 'Regularizada') {
                nextStatus = 'Aprobada';
            } else {
                nextStatus = 'Pendiente';
            }

            return { ...prev, [subjectId]: nextStatus };
        });
    };

    const subjectsWithStatus = useMemo(() => {
        return initialSubjects.map(subject => {
            let finalStatus = userStatuses[subject.id] || 'Pendiente';

            if (finalStatus === 'Pendiente') {
                // Evaluate dynamic "Podes Cursar"
                const requiredToCourseIds = subject.correlatives.toCourse || [];

                let canCourse = true;
                if (requiredToCourseIds.length > 0) {
                    canCourse = requiredToCourseIds.every(reqId => {
                        const reqStatus = userStatuses[reqId];
                        return reqStatus === 'Aprobada' || reqStatus === 'Regularizada';
                    });
                }

                if (canCourse) {
                    finalStatus = 'Podes Cursar';
                }
            }

            return {
                ...subject,
                status: finalStatus
            };
        });
    }, [initialSubjects, userStatuses]);

    return {
        subjectsWithStatus,
        cycleStatus
    };
};
