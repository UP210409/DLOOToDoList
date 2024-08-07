import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import Project from '../Project/Project';
import { ProjectForm } from '../Project';
import Main from '../Main/Main';
import TaskModal from '../Task/TaskModal';
import FilterMenu from '../Filter/FilterMenu';
import Login from '../Login/Login';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]); // Initialize as an empty array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
    fetchUsers();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/tasks');
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

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users');
      const data = await response.json();
      setUsers(Array.isArray(data) ? data : []); // Ensure the data is an array
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]); // Set to an empty array on error
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:8080/projects');
      const data = await response.json();
      setProjects(Array.isArray(data) ? data : []); // Ensure the data is an array
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]); // Set to an empty array on error
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
      console.error('Error fetching tasks by person:', error);
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
      console.error('Error fetching tasks by project:', error);
    }
  };

  const handleAddTask = () => {
    setTaskToEdit(null);
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

    if (taskDate < today) return 'conRetraso';
    if (taskDate.toDateString() === today.toDateString()) return 'hoy';
    if (taskDate.toDateString() === new Date(today.setDate(today.getDate() + 1)).toDateString()) return 'manana';
    return 'siguienteSemana';
  };

  const handleCreateProject = (project) => {
    // Aquí deberías hacer una petición al backend para crear el proyecto
    setProjects([...projects, project]);
  };

  const Principal = () => (
    <div className="app-container">
      <Sidebar projects={projects} />
      <div className="main-content">
        <Nav onAddTask={handleAddTask} onFilterTasks={handleFilterTasks} />
        <Main 
          tasks={tasks} 
          onDeleteTask={handleDeleteTask} 
          onCompleteTask={handleCompleteTask} 
          onEditTask={handleEditTask} 
        />
      </div>
      <TaskModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleSaveTask} 
        task={taskToEdit} 
      />
      <FilterMenu 
        isOpen={isFilterMenuOpen} 
        onClose={handleCloseFilterMenu} 
        onFilter={handleApplyFilter} 
        users={users} 
        projects={projects} 
      />
      <ProjectForm 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleCreateProject} 
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
