// src/components/Main/Main.js
import React from 'react';
import Task from '../Task/Task';
import './Main.css';

const Main = ({ tasks, onDeleteTask, onCompleteTask }) => {
  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="main">
      <div className="status-column">
        <h3>Con Retraso</h3>
        {getTasksByStatus('conRetraso').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="status-column">
        <h3>Hoy</h3>
        {getTasksByStatus('hoy').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="status-column">
        <h3>Mañana</h3>
        {getTasksByStatus('manana').map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="status-column">
        <h3>Siguiente Semana</h3>
        {getTasksByStatus('siguienteSemana').map(task => (
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
};

export default Main;