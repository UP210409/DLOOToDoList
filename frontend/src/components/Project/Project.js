// src/components/Project/Project.js

import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import './Project.css';

function Project() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateProject = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSaveProject = (project) => {
    console.log('Project saved:', project);
    // Aquí puedes agregar la lógica para guardar el proyecto
  };

  return (
    <div className="project">
      <button className="create-project-btn" onClick={handleCreateProject}>Crear proyecto</button>
      <a className="logout-link" href="/logout">Cerrar Sesión</a>
      <ProjectForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
        onSave={handleSaveProject} 
      />
    </div>
  );
}

export default Project;
