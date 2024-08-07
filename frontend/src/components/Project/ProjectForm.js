import React, { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ isOpen, onClose, onSave }) {
  const [name, setName] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    if (name.trim()) {
      const project = { name };
      // Aquí deberías hacer una petición al backend para crear el proyecto
      onSave(project);
      onClose();
    }
  };

  return (
    <div className="project-form-overlay">
      <div className="project-form-content">
        <h2>Crear Proyecto:</h2>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Nombre"
          />
        </div>
        <div className="project-form-buttons">
          <button className="cancel-button" onClick={onClose}>Cancelar</button>
          <button className="save-button" onClick={handleSave}>Crear</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
