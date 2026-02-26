// src/utils/correlativity.js
// Correlatives are now { id, condition } objects

export const checkCorrelativity = (subject) => {
    return {
        toCourse: subject.correlatives.toCourse,
        toApprove: subject.correlatives.toApprove
    };
};

export const getDependents = (subjectId, allSubjects) => {
    // Returns IDs of subjects that require `subjectId` as a prerequisite
    const dependents = [];

    allSubjects.forEach(s => {
        const inToCourse = s.correlatives.toCourse.some(req => req.id === subjectId);
        const inToApprove = s.correlatives.toApprove.some(req => req.id === subjectId);
        if (inToCourse || inToApprove) {
            dependents.push(s.id);
        }
    });

    return dependents;
};

export const getStatusColor = (status) => {
    switch (status) {
        case 'Aprobado': return 'var(--status-aprobado-bg)';
        case 'Regularizada': return 'var(--status-regular-bg)';
        case 'En Curso': return 'var(--status-curso-bg)';
        default: return 'var(--status-none-bg)';
    }
};
