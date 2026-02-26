import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './SubjectCard.css';

const SubjectCard = ({
    subject,
    plan,
    onCycleStatus,
    isActive,
    onSelect,
    activeSubject
}) => {

    const highlightState = useMemo(() => {
        if (!activeSubject) return 'normal';

        if (activeSubject.id === subject.id) return 'active';

        const isRequiredToCourse = activeSubject.correlatives.toCourse.some(req => req.id === subject.id);
        const isRequiredToApprove = activeSubject.correlatives.toApprove.some(req => req.id === subject.id);

        if (isRequiredToCourse || isRequiredToApprove) {
            return 'dependency';
        }

        const activeIsRequiredToCourse = subject.correlatives.toCourse.some(req => req.id === activeSubject.id);
        const activeIsRequiredToApprove = subject.correlatives.toApprove.some(req => req.id === activeSubject.id);

        if (activeIsRequiredToCourse || activeIsRequiredToApprove) {
            return 'dependent';
        }

        return 'dimmed';
    }, [activeSubject, subject]);

    const statusClass = subject.status ? subject.status.toLowerCase().replace(/\s+/g, '-') : 'pendiente';

    const handleClick = (e) => {
        e.preventDefault();
        onCycleStatus(subject.id);
        onSelect(null); // Left click clears arrow mode and cycles status
    };

    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the browser's right-click menu
        if (activeSubject && activeSubject.id === subject.id) {
            onSelect(null); // Toggle off if already active
        } else {
            onSelect(subject); // Activate arrow mode
        }
    };

    return (
        <motion.div
            id={`card-${subject.id}`}
            className={`subject-card status-${statusClass} highlight-${highlightState}`}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
            /* Removed whileHover scale effect as per strict minimalist feedback */
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            title="Click izquierdo: Cambiar estado | Click derecho: Ver flechas correlativas"
        >
            <div className="card-header">
                <span className="subject-id">{subject.id}</span>
            </div>
            <h3 className="subject-name">{subject.name}</h3>
        </motion.div>
    );
};

export default SubjectCard;
