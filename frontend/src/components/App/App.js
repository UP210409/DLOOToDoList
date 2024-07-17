// src/components/App/App.js

import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Project from '../Project/Project';
import Main from '../Main/Main';
import TaskModal from '../Task/TaskModal';
import FilterMenu from '../Filter/FilterMenu';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleAddTask = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (task) => {
    console.log('Task saved:', task);
    // Aquí puedes agregar la lógica para guardar la tarea
  };

  const handleFilterTasks = () => {
    setIsFilterMenuOpen(true);
  };

  const handleCloseFilterMenu = () => {
    setIsFilterMenuOpen(false);
  };

  const handleApplyFilter = (filters) => {
    console.log('Filters applied:', filters);
    // Aquí puedes agregar la lógica para aplicar los filtros
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <Project />
      </div>
      <div className="main-content">
        <Nav onAddTask={handleAddTask} onFilterTasks={handleFilterTasks} />
        <Main />
      </div>
      <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveTask} />
      <FilterMenu isOpen={isFilterMenuOpen} onClose={handleCloseFilterMenu} onFilter={handleApplyFilter} />
    </div>
  );
}

export default App;
