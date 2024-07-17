// src/components/Task/TaskModal.js

import React, { useState } from 'react';
import './TaskModal.css';

function TaskModal({ isOpen, onClose, onSave }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [project, setProject] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    const newTask = { taskName, description, assignee, project };
    onSave(newTask);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Crear Tarea</h2>
        <input
          type="text"
          placeholder="Crear Tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="modal-selects">
          <div>
            <label>Asignar a:</label>
            <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="user1">Usuario 1</option>
              <option value="user2">Usuario 2</option>
            </select>
          </div>
          <div>
            <label>Proyecto:</label>
            <select value={project} onChange={(e) => setProject(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="project1">Proyecto 1</option>
              <option value="project2">Proyecto 2</option>
            </select>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Crear</button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
