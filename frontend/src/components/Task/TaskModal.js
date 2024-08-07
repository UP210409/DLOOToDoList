import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './TaskModal.css';

function TaskModal({ isOpen, onClose, onSave, task }) {
  const [taskName, setTaskName] = useState(task ? task.name : '');
  const [taskDescription, setTaskDescription] = useState(task ? task.description : '');
  const [taskDate, setTaskDate] = useState(task ? new Date(task.dueDate) : new Date());

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setTaskDescription(task.description);
      setTaskDate(new Date(task.dueDate));
    }
  }, [task]);

  const handleSave = () => {
    const taskData = {
      id: task ? task.id : null,
      name: taskName,
      description: taskDescription,
      dueDate: taskDate.toISOString().split('T')[0], // Format as 'yyyy-MM-dd'
      createdAt: task ? task.createdAt : new Date().toISOString().split('T')[0],
      updatedAt: task ? task.updatedAt : new Date().toISOString().split('T')[0]
    };
    onSave(taskData);
    setTaskName('');
    setTaskDescription('');
    setTaskDate(new Date());
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{task ? 'Editar Tarea' : 'Crear Tarea'}</h2>
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
        />
        <DatePicker
          selected={taskDate}
          onChange={(date) => setTaskDate(date)}
          dateFormat="yyyy-MM-dd" // Ensures format compatibility
        />
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancelar</button>
          <button onClick={handleSave} className="save-button">{task ? 'Guardar' : 'Crear'}</button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
