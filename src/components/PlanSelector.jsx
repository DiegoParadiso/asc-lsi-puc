import React from 'react';
import { motion } from 'framer-motion';
import './PlanSelector.css';

const PlanSelector = ({ selectedPlanId, onSelectPlan }) => {
    return (
        <div className="plan-selector">
            <button
                className={`selector-btn ${selectedPlanId === 'analista-2010' ? 'active' : ''}`}
                onClick={() => onSelectPlan('analista-2010')}
            >
                Analista (2010)
                {selectedPlanId === 'analista-2010' && (
                    <motion.div className="active-bg" layoutId="activePlan" />
                )}
            </button>
            <button
                className={`selector-btn ${selectedPlanId === 'licenciatura-2013' ? 'active' : ''}`}
                onClick={() => onSelectPlan('licenciatura-2013')}
            >
                Licenciatura (2013)
                {selectedPlanId === 'licenciatura-2013' && (
                    <motion.div className="active-bg" layoutId="activePlan" />
                )}
            </button>
            <button
                className={`selector-btn ${selectedPlanId === 'profesorado-2015' ? 'active' : ''}`}
                onClick={() => onSelectPlan('profesorado-2015')}
            >
                Profesorado (2015)
                {selectedPlanId === 'profesorado-2015' && (
                    <motion.div className="active-bg" layoutId="activePlan" />
                )}
            </button>
        </div>
    );
};

export default PlanSelector;
