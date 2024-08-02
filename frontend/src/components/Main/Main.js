import React from 'react';
import TaskCard from '../Task/TaskCard';
import './Main.css';

function Main({ tasks, onDeleteTask, onCompleteTask }) {
  const tasksByStatus = (status) => tasks.filter(task => task.status === status);

  return (
    <div className="main">
      <div className="status-column">
        <h3>Con Retraso</h3>
        {tasksByStatus('conRetraso').map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="status-column">
        <h3>Hoy</h3>
        {tasksByStatus('hoy').map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="status-column">
        <h3>Mañana</h3>
        {tasksByStatus('manana').map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onComplete={onCompleteTask} 
          />
        ))}
      </div>
      <div className="status-column">
        <h3>Siguiente Semana</h3>
        {tasksByStatus('siguienteSemana').map(task => (
          <TaskCard 
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
