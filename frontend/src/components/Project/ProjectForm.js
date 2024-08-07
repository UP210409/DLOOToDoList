import React, { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ isOpen, onClose, onSave }) {
  const [name, setName] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSave = async () => {
    if (name.trim()) {
      const project = { name };
      try {
        // Enviar el proyecto al backend
        const response = await fetch('http://localhost:8080/projects/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        });
        
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        const data = await response.json();

        // Llama a la función onSave pasada como prop
        if (onSave) {
          onSave(data);
        }
        
        // Limpia el campo de entrada
        setName('');
        // Cierra el formulario
        onClose();
      } catch (error) {
        console.error('Error al crear el proyecto:', error);
      }
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
