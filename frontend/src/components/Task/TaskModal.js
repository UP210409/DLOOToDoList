// src/components/Task/TaskModal.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskModal.css';

const TaskModal = ({ isOpen, onClose, onSave, people, projects }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
    assignedTo: '',
    project: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDateChange = (date) => {
    setTask(prevState => ({ ...prevState, dueDate: date }));
  };

  const handleSave = () => {
    onSave(task);
  };

  if (!isOpen) return null;

  return (
    <div className="task-modal">
      <div className="task-modal-content">
        <h2>Crear Tarea</h2>
        <input 
          type="text" 
          name="title" 
          placeholder="Nombre de la tarea" 
          value={task.title} 
          onChange={handleChange} 
        />
        <textarea 
          name="description" 
          placeholder="Descripción" 
          value={task.description} 
          onChange={handleChange} 
        />
        <label>Fecha de Vencimiento:</label>
        <DatePicker 
          selected={task.dueDate} 
          onChange={handleDateChange} 
        />
        <label>Asignar a:</label>
        <select 
          name="assignedTo" 
          value={task.assignedTo} 
          onChange={handleChange} 
        >
          {people.map(person => (
            <option key={person.id} value={person.name}>{person.name}</option>
          ))}
        </select>
        <label>Proyecto:</label>
        <select 
          name="project" 
          value={task.project} 
          onChange={handleChange} 
        >
          {projects.map(project => (
            <option key={project.id} value={project.name}>{project.name}</option>
          ))}
        </select>
        <button onClick={handleSave}>Crear</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default TaskModal;