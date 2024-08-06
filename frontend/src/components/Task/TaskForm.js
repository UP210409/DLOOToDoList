import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './TaskForm.css';

function TaskForm({ onSave, onCancel }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [users, setUsers] = useState([
    { id: '1', name: 'Usuario 1' },
    { id: '2', name: 'Usuario 2' },
    { id: '3', name: 'Usuario 3' }
  ]); // Datos de prueba para usuarios
  const [projects, setProjects] = useState([
    { id: '1', name: 'Proyecto 1' },
    { id: '2', name: 'Proyecto 2' },
    { id: '3', name: 'Proyecto 3' }
  ]); // Datos de prueba para proyectos
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(() => {
    // Aquí iría el fetch para obtener usuarios y proyectos cuando se conecte al backend
    // setUsers(fetchedUsers);
    // setProjects(fetchedProjects);
  }, []);

  const handleSave = () => {
    onSave({
      name: taskName,
      description: taskDescription,
      date: taskDate,
      user: selectedUser,
      project: selectedProject,
      status: 'hoy',
    });
    setTaskName('');
    setTaskDescription('');
    setTaskDate(new Date());
    setSelectedUser('');
    setSelectedProject('');
  };

  return (
    <div className="task-form">
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
      />
      <DatePicker
        selected={taskDate}
        onChange={(date) => setTaskDate(date)}
      />
      <div className="select-group">
        <label>Usuario:</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Seleccionar Usuario</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
      <div className="select-group">
        <label>Proyecto:</label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Seleccionar Proyecto</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>
      </div>
      <div className="task-form-buttons">
        <button onClick={onCancel} className="cancel-button">Cancelar</button>
        <button onClick={handleSave} className="save-button">Guardar</button>
      </div>
    </div>
  );
}

export default TaskForm;
