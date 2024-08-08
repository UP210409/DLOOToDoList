import React, { useState, useEffect } from 'react';
import TaskCard from '../Task/TaskCard';
import './Main.css';

function Main({ tasks, onDeleteTask, onCompleteTask, onEditTask }) {
  const [fullTasks, setFullTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const usersResponse = await fetch('http://localhost:8080/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const projectsResponse = await fetch('http://localhost:8080/projects');
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        setFullTasks(updateTasksWithAdditionalData(tasks, usersData, projectsData));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching additional data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [tasks]);

  useEffect(() => {
    setFullTasks(updateTasksWithAdditionalData(tasks, users, projects));
  }, [users, projects]);

  const updateTasksWithAdditionalData = (tasks, users, projects) => {
    return tasks.map(task => {
      const user = users.find(u => u.id === task.user_id) || {};
      const project = projects.find(p => p.id === task.project_id) || {};
      return {
        ...task,
        userName: user.name || 'Desconocido',
        projectName: project.name || 'Desconocido',
      };
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const tasksByStatus = (status) => fullTasks.filter(task => task.status === status);

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
            onEdit={onEditTask} 
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
            onEdit={onEditTask} 
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
            onEdit={onEditTask} 
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
            onEdit={onEditTask} 
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
