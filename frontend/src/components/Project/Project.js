// src/components/Project/Project.js

import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className="project">
      <button className="create-project">Crear proyecto</button>
      <a href="#" className="logout">Cerrar Sesión</a>
    </div>
  );
}

export default Project;
