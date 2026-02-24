import React, { useMemo } from 'react';
import './StatsBar.css';

const StatsBar = ({ subjects }) => {
    const stats = useMemo(() => {
        const total = subjects.length;
        const aprobadas = subjects.filter(s => s.status === 'Aprobada').length;
        const regularizadas = subjects.filter(s => s.status === 'Regularizada').length;
        const podesCursar = subjects.filter(s => s.status === 'Podes Cursar').length;
        const pendientes = subjects.filter(s => s.status === 'Pendiente').length;
        const pct = total > 0 ? Math.round((aprobadas / total) * 100) : 0;

        return { total, aprobadas, regularizadas, podesCursar, pendientes, pct };
    }, [subjects]);

    return (
        <div className="stats-bar">
            <div className="stats-progress">
                <div className="stats-pct">{stats.pct}%</div>
                <div className="stats-track">
                    <div className="stats-fill" style={{ width: `${stats.pct}%` }} />
                </div>
            </div>
            <div className="stats-divider" />
            <div className="stats-items">
                <div className="stats-item">
                    <span className="stats-dot" style={{ background: 'var(--status-aprobado-bg)' }} />
                    <span className="stats-count">{stats.aprobadas}</span>
                    <span className="stats-label">Aprobadas</span>
                </div>
                <div className="stats-item">
                    <span className="stats-dot" style={{ background: 'var(--status-regular-bg)' }} />
                    <span className="stats-count">{stats.regularizadas}</span>
                    <span className="stats-label">Regularizadas</span>
                </div>
                <div className="stats-item">
                    <span className="stats-dot" style={{ background: 'var(--status-curso-bg)' }} />
                    <span className="stats-count">{stats.podesCursar}</span>
                    <span className="stats-label">Podés Cursar</span>
                </div>
                <div className="stats-item">
                    <span className="stats-dot" style={{ background: 'var(--status-none-border)' }} />
                    <span className="stats-count">{stats.pendientes}</span>
                    <span className="stats-label">Pendientes</span>
                </div>
                <div className="stats-item total">
                    <span className="stats-count">{stats.total}</span>
                    <span className="stats-label">Total</span>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
