// src/components/Main/Main.js

import React from 'react';
import Task from '../Task/Task';
import './Main.css';

function Main({ tasks, onDeleteTask, onCompleteTask }) {
  const tasksByStatus = (status) => tasks.filter(task => task.status === status);

  return (
    <div className="main">
      <div className="task-column">
        <h2>Con Retraso</h2>
        {tasksByStatus('conRetraso').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="task-column">
        <h2>Hoy</h2>
        {tasksByStatus('hoy').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="task-column">
        <h2>Mañana</h2>
        {tasksByStatus('manana').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="task-column">
        <h2>Siguiente semana</h2>
        {tasksByStatus('siguienteSemana').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
