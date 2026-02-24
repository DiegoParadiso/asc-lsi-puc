import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { getDependents } from '../utils/correlativity';
import './SubjectDetails.css';

const SubjectDetails = ({ subject, plan, onClose, onSelectSubject }) => {
    if (!subject) return null;

    const dependents = getDependents(subject.id, plan.subjects);

    const getSubjectName = (id) => {
        const s = plan.subjects.find(sub => sub.id === id);
        return s ? s.name : id;
    };

    const toCourse = subject.correlatives.toCourse || [];
    const toApprove = subject.correlatives.toApprove || [];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="subject-details glass-panel"
            >
                <div className="details-header">
                    <div className="title-area">
                        <span className="details-id">{subject.id}</span>
                        <span className={`details-status badge-${subject.status?.replace(' ', '-').toLowerCase() || 'none'}`}>
                            {subject.status || 'Sin cursar'}
                        </span>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                <h2 className="details-title">{subject.name}</h2>

                <div className="details-meta">
                    <div className="meta-item">
                        <span className="meta-label">Año</span>
                        <span className="meta-value">{subject.year}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Período</span>
                        <span className="meta-value">{subject.period}</span>
                    </div>
                    {subject.grade && (
                        <div className="meta-item">
                            <span className="meta-label">Nota</span>
                            <span className="meta-value score">{subject.grade}</span>
                        </div>
                    )}
                </div>

                <div className="correlatives-section">
                    <h3>Correlatividades Requeridas</h3>

                    <div className="correlatives-group">
                        <h4 className="group-title">
                            <AlertCircle size={16} /> Para Cursar
                        </h4>
                        {toCourse.length > 0 ? (
                            <ul className="correlatives-list">
                                {toCourse.map(id => (
                                    <li key={id} onClick={() => onSelectSubject(plan.subjects.find(s => s.id === id))} className="clickable-correlative">
                                        <span className="c-id">{id}</span> {getSubjectName(id)}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-correlatives">No tiene requisitos para cursar.</p>
                        )}
                    </div>

                    <div className="correlatives-group">
                        <h4 className="group-title">
                            <CheckCircle2 size={16} /> Para Aprobar
                        </h4>
                        {toApprove.length > 0 ? (
                            <ul className="correlatives-list">
                                {toApprove.map(id => (
                                    <li key={id} onClick={() => onSelectSubject(plan.subjects.find(s => s.id === id))} className="clickable-correlative">
                                        <span className="c-id">{id}</span> {getSubjectName(id)}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-correlatives">No tiene requisitos para aprobar.</p>
                        )}
                    </div>
                </div>

                {dependents.length > 0 && (
                    <div className="correlatives-section">
                        <h3>Es requisito para</h3>
                        <ul className="correlatives-list dependent-list">
                            {dependents.map(id => (
                                <li key={id} onClick={() => onSelectSubject(plan.subjects.find(s => s.id === id))} className="clickable-correlative">
                                    <ArrowRight size={14} className="dependent-icon" />
                                    <span className="c-id">{id}</span> {getSubjectName(id)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default SubjectDetails;
