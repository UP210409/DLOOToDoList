//src/components/App/App.js

import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar'; // Asegúrate de importar el Sidebar
import Project from '../Project/Project';
import Main from '../Main/Main';
import TaskModal from '../Task/TaskModal';
import FilterMenu from '../Filter/FilterMenu';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); // Para editar tareas

  const handleAddTask = () => {
    setTaskToEdit(null); // Para crear una nueva tarea
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (task) => {
    if (taskToEdit) {
      // Editar tarea existente
      setTasks(tasks.map(t => t.id === taskToEdit.id ? { ...task, id: t.id, completed: t.completed, status: determineStatus(task.date) } : t));
    } else {
      // Crear nueva tarea
      const newStatus = determineStatus(task.date);
      setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false, status: newStatus }]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    setTaskToEdit(task);
    setIsModalOpen(true);
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

  const determineStatus = (date) => {
    const today = new Date();
    const taskDate = new Date(date);

    if (taskDate < today) return 'conRetraso';
    if (taskDate.toDateString() === today.toDateString()) return 'hoy';
    if (taskDate.toDateString() === new Date(today.setDate(today.getDate() + 1)).toDateString()) return 'manana';
    return 'siguienteSemana';
  };

  return (
    <div className="app-container">
      <Sidebar /> {/* Asegúrate de incluir el Sidebar aquí */}
      <div className="main-content">
        <Nav onAddTask={handleAddTask} onFilterTasks={handleFilterTasks} />
        <Main 
          tasks={tasks} 
          onDeleteTask={handleDeleteTask} 
          onCompleteTask={handleCompleteTask} 
          onEditTask={handleEditTask} // Pasar la función para editar tareas
        />
      </div>
      <TaskModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleSaveTask} 
        task={taskToEdit} // Pasar la tarea a editar
      />
      <FilterMenu 
        isOpen={isFilterMenuOpen} 
        onClose={handleCloseFilterMenu} 
        onFilter={handleApplyFilter} 
      />
    </div>
  );
}

export default App;