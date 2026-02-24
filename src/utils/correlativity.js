// src/utils/correlativity.js

export const checkCorrelativity = (subject, allSubjects) => {
    // Helpers to get direct dependencies
    // toCourse: subjects required to "cursar"
    // toApprove: subjects required to "aprobar"

    return {
        toCourse: subject.correlatives.toCourse,
        toApprove: subject.correlatives.toApprove
    };
};

export const getDependents = (subjectId, allSubjects) => {
    // Returns IDs of subjects that require `subjectId` to be regularized or approved
    const dependents = [];

    allSubjects.forEach(s => {
        if (s.correlatives.toCourse.includes(subjectId) || s.correlatives.toApprove.includes(subjectId)) {
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
