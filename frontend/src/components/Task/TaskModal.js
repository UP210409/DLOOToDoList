// src/components/Task/TaskModal.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './TaskModal.css';

function TaskModal({ isOpen, onClose, onSave }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());

  const handleSave = () => {
    onSave({ name: taskName, description: taskDescription, date: taskDate, status: 'hoy' });
    setTaskName('');
    setTaskDescription('');
    setTaskDate(new Date());
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Crear Tarea</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
        <DatePicker
          selected={taskDate}
          onChange={(date) => setTaskDate(date)}
        />
        <div className="modal-buttons">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Crear</button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
