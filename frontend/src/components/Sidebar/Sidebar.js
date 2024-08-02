// src/components/Sidebar/Sidebar.js

import React from 'react';
import './Sidebar.css';
import logo from './Logo_JMAbogados.png'; // Importa el logo

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="JM Abogados Logo" />
          <h2>DLOO - To Do App</h2>
        </div>
        <button className="create-project-button">Crear Proyecto</button>
      </div>
    );
  }

export default Sidebar;
