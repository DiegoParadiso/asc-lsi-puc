import React, { useMemo } from 'react';
import Xarrow from 'react-xarrows';
import SubjectCard from './SubjectCard';
import PlanSelector from './PlanSelector';
import StatsBar from './StatsBar';
import './StudyGrid.css';

const StudyGrid = ({
    plan,
    onCycleStatus,
    activeSubject,
    onSelectSubject,
    selectedPlanId,
    onSelectPlan
}) => {
    const years = useMemo(() => {
        const grouped = {};
        plan.subjects.forEach(subject => {
            const yStr = subject.year.toString();
            if (!grouped[yStr]) {
                grouped[yStr] = { 1: [], 2: [] };
            }

            const pLower = subject.period.toLowerCase();
            if (pLower.includes('2do') || pLower.includes('segundo')) {
                grouped[yStr][2].push(subject);
            } else {
                grouped[yStr][1].push(subject);
            }
        });
        return grouped;
    }, [plan]);

    const arrows = useMemo(() => {
        const arrs = [];
        if (!activeSubject) return arrs;

        // Track how many arrows are already going TO each target card
        // so we can offset them horizontally to avoid overlapping
        const targetArrivalCount = {};

        plan.subjects.forEach(targetSub => {
            const prerequisites = [...new Set([...targetSub.correlatives.toCourse, ...targetSub.correlatives.toApprove])];
            prerequisites.forEach(sourceId => {
                const sourceSub = plan.subjects.find(s => s.id === sourceId);
                if (!sourceSub) return;
                if (sourceSub.year !== targetSub.year) {
                    if (activeSubject.id === targetSub.id || activeSubject.id === sourceId) {
                        const key = targetSub.id;
                        targetArrivalCount[key] = (targetArrivalCount[key] || 0) + 1;
                    }
                }
            });
        });

        // Offset steps spread evenly across the card width
        const offsetStep = 20;
        const perTargetIndex = {};

        plan.subjects.forEach(targetSub => {
            const prerequisites = [...new Set([...targetSub.correlatives.toCourse, ...targetSub.correlatives.toApprove])];
            prerequisites.forEach(sourceId => {
                const sourceSub = plan.subjects.find(s => s.id === sourceId);
                if (!sourceSub) return;
                if (sourceSub.year !== targetSub.year) {
                    if (activeSubject.id === targetSub.id || activeSubject.id === sourceId) {
                        const key = targetSub.id;
                        const idx = perTargetIndex[key] || 0;
                        const total = targetArrivalCount[key] || 1;

                        // Spread offsets symmetrically around 0
                        // e.g. 2 arrows: -10, +10 | 3 arrows: -20, 0, +20
                        const spread = (total - 1) * offsetStep;
                        const xOffset = -spread / 2 + idx * offsetStep;

                        perTargetIndex[key] = idx + 1;

                        // Curveness also varies per source for visual separation
                        const curveBases = [0.3, 0.5, 0.7, 0.9];
                        const curveness = curveBases[idx % curveBases.length];

                        arrs.push({
                            start: `card-${sourceId}`,
                            end: `card-${targetSub.id}`,
                            color: '#52525b',
                            strokeWidth: 1.5,
                            zIndex: 10,
                            curveness,
                            xOffset,
                        });
                    }
                }
            });
        });
        return arrs;
    }, [plan, activeSubject]);

    return (
        <div className="study-grid-wrapper">
            {/* Integrated Header within the scrolling area */}
            <div className="integrated-header">
                <div className="header-brand">
                    {/* Using custom logo instead of lucide-react icon */}
                    <img src="/logo.png" alt="Logo" className="logo-icon" />
                </div>
                <PlanSelector selectedPlanId={selectedPlanId} onSelectPlan={onSelectPlan} />
            </div>

            <div className="legend-container">
                <div className="legend-item">
                    <div className="legend-color" style={{ background: 'var(--status-aprobado-bg)', border: '1px solid var(--status-aprobado-border)' }}></div>
                    <span>Aprobada</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: 'var(--status-regular-bg)', border: '1px solid var(--status-regular-border)' }}></div>
                    <span>Regularizada</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: 'var(--status-curso-bg)', border: '1px solid var(--status-curso-border)' }}></div>
                    <span>Podes Cursar</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: 'var(--status-none-bg)', border: '1px solid var(--status-none-border)' }}></div>
                    <span>Pendiente</span>
                </div>
            </div>

            <StatsBar subjects={plan.subjects} />

            <div className="study-grid-content">
                {Object.entries(years).sort(([a], [b]) => Number(a) - Number(b)).map(([year, periods]) => {
                    const yearNames = ['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto'];
                    const yearLabel = yearNames[Number(year) - 1] || `${year}°`;
                    return (
                        <div key={year} className="year-group">
                            <h2 className="year-title">{yearLabel} Año</h2>
                            <div className="year-periods">
                                <div className="period-column">
                                    <h3 className="period-title">1er Cuatrimestre / Anual</h3>
                                    <div className="subjects-list">
                                        {periods[1].map(subject => (
                                            <SubjectCard
                                                key={subject.id}
                                                subject={subject}
                                                plan={plan}
                                                onCycleStatus={onCycleStatus}
                                                onSelect={onSelectSubject}
                                                activeSubject={activeSubject}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="period-column">
                                    <h3 className="period-title">2do Cuatrimestre</h3>
                                    <div className="subjects-list">
                                        {periods[2].map(subject => (
                                            <SubjectCard
                                                key={subject.id}
                                                subject={subject}
                                                plan={plan}
                                                onCycleStatus={onCycleStatus}
                                                onSelect={onSelectSubject}
                                                activeSubject={activeSubject}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Render active arrows */}
            {arrows.map((arr, i) => (
                <Xarrow
                    key={`${arr.start}-${arr.end}-${i}`}
                    start={arr.start}
                    end={arr.end}
                    color={arr.color}
                    strokeWidth={arr.strokeWidth}
                    zIndex={arr.zIndex}
                    curveness={arr.curveness}
                    headSize={4}
                    path="smooth"
                    startAnchor={[{ position: 'bottom', offset: { x: arr.xOffset } }]}
                    endAnchor={[{ position: 'top', offset: { x: arr.xOffset } }]}
                />
            ))}
        </div>
    );
};

export default StudyGrid;
