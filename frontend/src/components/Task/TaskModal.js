import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './TaskModal.css';

function TaskModal({ isOpen, onClose, onSave, task }) {
  const [taskName, setTaskName] = useState(task ? task.name : '');
  const [taskDescription, setTaskDescription] = useState(task ? task.description : '');
  const [taskDate, setTaskDate] = useState(task ? new Date(task.dueDate) : new Date());
  const [selectedUser, setSelectedUser] = useState(task ? task.user_id : '');
  const [selectedProject, setSelectedProject] = useState(task ? task.project_id : '');
  const [users, setUsers] = useState([]); // Define setUsers here
  const [projects, setProjects] = useState([]); // Define setProjects here

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setTaskDescription(task.description);
      setTaskDate(new Date(task.dueDate));
      setSelectedUser(task.user_id);
      setSelectedProject(task.project_id);
    }
  }, [task]);

  useEffect(() => {
    // Fetch users
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));

    // Fetch projects
    fetch('http://localhost:8080/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleSave = () => {
    const taskData = {
      id: task ? task.id : null,
      name: taskName,
      description: taskDescription,
      dueDate: taskDate.toISOString().split('T')[0], // Format as 'yyyy-MM-dd'
      user_id: selectedUser,
      project_id: selectedProject,
      createdAt: task ? task.createdAt : new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    onSave(taskData);
    setTaskName('');
    setTaskDescription('');
    setTaskDate(new Date());
    setSelectedUser('');
    setSelectedProject('');
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
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancelar</button>
          <button onClick={handleSave} className="save-button">{task ? 'Guardar' : 'Crear'}</button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
