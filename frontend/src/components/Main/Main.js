import React from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Task from '../Task/Task';
<<<<<<< Updated upstream
=======
import './Main.css';

const Main = ({ tasks, onDeleteTask, onCompleteTask }) => {
  const getTasksByStatus = (status) => {
    if (!Array.isArray(tasks)) {
      console.error('Tasks is not an array:', tasks);
      return [];
    }
    return tasks.filter(task => task.status === status);
  };
>>>>>>> Stashed changes

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
