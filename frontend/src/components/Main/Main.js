// src/components/Main/Main.js

import React from 'react';
import './Main.css';
import Task from '../Task/Task';

function Main() {
  return (
    <div className="main">
      <div className="task-sections">
        <div className="task-section">
          <h2>Con Retraso</h2>
          <Task />
          <Task />
        </div>
        <div className="task-section">
          <h2>Hoy</h2>
          <Task />
        </div>
        <div className="task-section">
          <h2>Mañana</h2>
          <Task />
          <Task />
        </div>
        <div className="task-section">
          <h2>Siguiente semana</h2>
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
}

export default Main;
