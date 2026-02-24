import { useState, useEffect, useMemo } from 'react';

export const useSubjectStatus = (planId, initialSubjects) => {
    const [userStatuses, setUserStatuses] = useState(() => {
        try {
            const savedStr = localStorage.getItem(`fceqyn-status-v3-${planId}`);
            const saved = savedStr ? JSON.parse(savedStr) : {};

            const defaultStatuses = {};
            initialSubjects.forEach(s => {
                if (s.status === 'Aprobado') {
                    defaultStatuses[s.id] = 'Aprobada';
                } else if (s.status === 'Regularidad' || s.status === 'Regularizada') {
                    defaultStatuses[s.id] = 'Regularizada';
                }
            });

            // Merge manually saved states over defaults.
            // If a user forced a default Aprobada subject back to Pendiente, 'saved' will preserve 'Pendiente'.
            return { ...defaultStatuses, ...saved };
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
