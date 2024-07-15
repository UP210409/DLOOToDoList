import React from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Task from '../Task/Task';

function Main() {
  return (
    <div className="main">
      <StatusBar />
      <div className="task-sections">
        <div className="task-section">
          <h2>Con Retraso</h2>
          {/* Tasks*/}
          <Task />
        </div>
        <div className="task-section">
          <h2>Hoy</h2>
          {/* Tasks*/}
          <Task />
        </div>
        <div className="task-section">
          <h2>Mañana</h2>
          {/* Tasks*/}
          <Task />
        </div>
        <div className="task-section">
          <h2>Siguiente semana</h2>
          {/* Tasks*/}
          <Task />
        </div>
      </div>
    </div>
  );
}

export default Main;
