// src/components/Nav/Nav.js
import React from 'react';
import './Nav.css';
import { FaPlus, FaFilter } from 'react-icons/fa'; // Importa los íconos necesarios

function Nav({ onAddTask, onFilterTasks }) {
  return (
    <div className="nav">
      <div className="logo">
        <h1>JM Abogados</h1>
      </div>
      <div className="controls">
        <button className="add-task" onClick={onAddTask}>
          <FaPlus />
        </button>
        <button className="filter-task" onClick={onFilterTasks}>
          <FaFilter />
        </button>
      </div>
    </div>
  );
}

export default Nav;

