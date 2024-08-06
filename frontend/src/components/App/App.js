//src/components/App/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar'; // Asegúrate de importar el Sidebar
import Project from '../Project/Project';
import Main from '../Main/Main';
import TaskModal from '../Task/TaskModal';
import FilterMenu from '../Filter/FilterMenu';
import Login from '../Login/Login';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); // Para editar tareas

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/tasks');
      const data = await response.json();
      console.log(data);
      // Add status to each task
      const tasksWithStatus = data.map(task => ({
        ...task,
        status: determineStatus(task.dueDate)
      }));
      setTasks(tasksWithStatus);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchTasksByPerson = async (personId) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/user/${personId}`);
      const data = await response.json();
      const tasksWithStatus = data.map(task => ({
        ...task,
        status: determineStatus(task.dueDate)
      }));
      setTasks(tasksWithStatus);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchTasksByProject = async (projectId) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/project/${projectId}`);
      const data = await response.json();
      const tasksWithStatus = data.map(task => ({
        ...task,
        status: determineStatus(task.dueDate)
      }));
      setTasks(tasksWithStatus);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = () => {
    setTaskToEdit(null); // Para crear una nueva tarea
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (task) => {
    const newStatus = determineStatus(task.dueDate);
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false, status: newStatus }]);
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
    if (filters.personId) {
      fetchTasksByPerson(filters.personId);
    } else if (filters.projectId) {
      fetchTasksByProject(filters.projectId);
    } else {
      fetchTasks();
    }
  };

  const determineStatus = (date) => {
    const today = new Date();
    const taskDate = new Date(date);

    console.log('Task Date:', taskDate);
    console.log('Today Date:', today);

    if (taskDate < today) return 'conRetraso';
    if (taskDate.toDateString() === today.toDateString()) return 'hoy';
    if (taskDate.toDateString() === new Date(today.setDate(today.getDate() + 1)).toDateString()) return 'manana';
    return 'siguienteSemana';
  };

  const Principal = () => (
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

  return (
    <Router>
      <Routes>
        <Route path="/principal" element={<Principal />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;