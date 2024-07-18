// src/components/Project/ProjectForm.js

import React, { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ isOpen, onClose, onSave }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    const project = { name, description };
    onSave(project);
    onClose();
  };

  return (
    <div className="project-form-overlay">
      <div className="project-form-content">
        <h2>Dar de alta proyecto</h2>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Nombre"
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Descripción"
          />
        </div>
        <div className="project-form-buttons">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Crear</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
