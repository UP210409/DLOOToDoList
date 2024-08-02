// src/components/Nav/Nav.js

import React from 'react';
import './Nav.css';

function Nav({ onAddTask, onFilterTasks }) {
  return (
    <div className="nav">
      <div className="logo">
        <h1>DLOO - To Do App / JM Abogados</h1>
      </div>
      <div className="controls">
        <button className="add-task" onClick={onAddTask}>+</button>
        <button className="filter-task" onClick={onFilterTasks}>🔍</button>
      </div>
    </div>
  );
}

export default Nav;

