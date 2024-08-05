// src/components/Sidebar/Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';
import logo from './Logo_JMAbogados.png'; // Importa el logo
import ProjectForm from '../Project/ProjectForm'; // Asegúrate de que la ruta es correcta

function Sidebar() {
  const [projects, setProjects] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateProject = (project) => {
    setProjects([...projects, project.name]);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

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
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <ProjectForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
        onSave={handleCreateProject} 
      />
    </div>
  );
}

export default Sidebar;
