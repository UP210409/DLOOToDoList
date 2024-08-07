// src/components/Sidebar/Sidebar.js
import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import logo from './Logo_JMAbogados.png'; // Importa el logo
import ProjectForm from '../Project/ProjectForm'; // Asegúrate de que la ruta es correcta

function Sidebar({ projects }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="JM Abogados Logo" />
        <h2>DLOO - To Do App</h2>
      </div>
      <button className="create-project-button" onClick={handleOpenForm}>
        Crear Proyecto
      </button>
      <div className="projects-list">
        <h3>Proyectos:</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
      {isFormOpen && (
        <ProjectForm 
          isOpen={isFormOpen} 
          onClose={handleCloseForm} 
        />
      )}
    </div>
  );
}

export default Sidebar;
