import { useState, useEffect, useMemo } from 'react';

// Checks if a subject status satisfies a required condition
const satisfiesCondition = (actualStatus, requiredCondition) => {
    if (requiredCondition === 'Regularizada') {
        // Regularizada OR Aprobada both satisfy 'Regularizada' requirement
        return actualStatus === 'Regularizada' || actualStatus === 'Aprobada';
    }
    if (requiredCondition === 'Aprobada') {
        return actualStatus === 'Aprobada';
    }
    return false;
};

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
                // Each req is { id, condition } — check each prereq meets its required condition
                const requiredToCourse = subject.correlatives.toCourse || [];

                let canCourse = true;
                if (requiredToCourse.length > 0) {
                    canCourse = requiredToCourse.every(req => {
                        const actualStatus = userStatuses[req.id] || 'Pendiente';
                        return satisfiesCondition(actualStatus, req.condition);
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
