import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import logo from './Logo_JMAbogados.png'; // Importa el logo
import ProjectForm from '../Project/ProjectForm'; // Asegúrate de que la ruta es correcta

function Sidebar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Función para obtener los proyectos desde el backend al cargar el componente
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/projects');
        if (!response.ok) {
          throw new Error('Error fetching projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []); // El array vacío indica que se ejecuta solo al montar el componente

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSaveProject = (project) => {
    fetch('http://localhost:8080/projects/save', { // Asegúrate de usar la URL correcta
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then(response => response.json())
      .then(data => {
        // Actualiza la lista de proyectos con el nuevo proyecto
        setProjects(prevProjects => [...prevProjects, data]);
        handleCloseForm();
      })
      .catch(error => console.error('Error adding project:', error));
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="JM Abogados Logo" />
        <h2>DLOO - To Do App</h2>
      </div>
      <button className="create-project-button" onClick={handleOpenForm}>
        Crear Proyecto
      </button>
      <div className="projects-list">
        <h3>Proyectos:</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
      {isFormOpen && (
        <ProjectForm 
          isOpen={isFormOpen} 
          onClose={handleCloseForm} 
          onSave={handleSaveProject} // Pasa handleSaveProject a ProjectForm
        />
      )}
    </div>
  );
}

export default Sidebar;
