// src/components/Filter/FilterMenu.js

import React, { useState } from 'react';
import './FilterMenu.css';

function FilterMenu({ isOpen, onClose, onFilter, users, projects }) {
  const [person, setPerson] = useState('');
  const [project, setProject] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleFilter = () => {
    const filters = { personId: person, projectId: project };
    onFilter(filters);
    onClose();
  };

  return (
    <div className="filter-menu-overlay">
      <div className="filter-menu-content">
        <h2>Filtrar según:</h2>
        <div>
          <label>Persona:</label>
          <select value={person} onChange={(e) => setPerson(e.target.value)}>
            <option value="">Seleccionar</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Proyecto:</label>
          <select value={project} onChange={(e) => setProject(e.target.value)}>
            <option value="">Seleccionar</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>{project.name}</option>
            ))}
          </select>
        </div>
        <div className="filter-menu-buttons">
          <button className="filter-button cancel" onClick={onClose}>Cancelar</button>
          <button className="filter-button apply" onClick={handleFilter}>Aplicar</button>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
