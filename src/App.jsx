import { useState } from 'react';
import { studyPlans } from './data/studyPlans';
import { useSubjectStatus } from './hooks/useSubjectStatus';
import StudyGrid from './components/StudyGrid';
import './App.css';
import { Xwrapper } from 'react-xarrows';

function getPlan(id) {
  if (id === 'analista-2010') return studyPlans.analista;
  if (id === 'licenciatura-2013') return studyPlans.licenciatura;
  if (id === 'profesorado-2015') return studyPlans.profesorado;
  return studyPlans.analista;
}

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState('analista-2010');
  const [activeSubject, setActiveSubject] = useState(null);

  const rawPlan = getPlan(selectedPlanId);

  const { subjectsWithStatus, cycleStatus } = useSubjectStatus(selectedPlanId, rawPlan.subjects);

  const plan = { ...rawPlan, subjects: subjectsWithStatus };

  return (
    <div className="app-container">
      <main className="main-content">
        <div className="grid-section full-width" onClick={(e) => {
          if (e.target.classList.contains('study-grid-wrapper') || e.target.classList.contains('study-grid')) {
            setActiveSubject(null);
          }
        }}>
          <Xwrapper>
            <StudyGrid
              plan={plan}
              onCycleStatus={cycleStatus}
              activeSubject={activeSubject}
              onSelectSubject={setActiveSubject}
              selectedPlanId={selectedPlanId}
              onSelectPlan={(id) => {
                setSelectedPlanId(id);
                setActiveSubject(null);
              }}
            />
          </Xwrapper>
        </div>
      </main>
    </div>
  );
}

export default App;
