import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< Updated upstream
=======
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Usuario' });

  const people = [
    { id: 1, name: 'Persona 1' },
    { id: 2, name: 'Persona 2' }
  ];

  const projects = [
    { id: 1, name: 'Proyecto 1' },
    { id: 2, name: 'Proyecto 2' }
  ];

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchTasksByPerson = async (personId) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/user/${personId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchTasksByProject = async (projectId) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/project/${projectId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = () => {
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

  const Principal = () => (
    <div className="app-container">
      <div className="sidebar">
        <div className="user-info">
          <h2>{user.name}</h2>
        </div>
        <Project />
      </div>
      <div className="main-content">
        <Nav onAddTask={handleAddTask} onFilterTasks={handleFilterTasks} />
        <Main 
          tasks={tasks} 
          onDeleteTask={handleDeleteTask} 
          onCompleteTask={handleCompleteTask} 
        />
      </div>
      <TaskModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleSaveTask} 
        people={people} 
        projects={projects} 
      />
      <FilterMenu isOpen={isFilterMenuOpen} onClose={handleCloseFilterMenu} onFilter={handleApplyFilter} />
    </div>
  );

>>>>>>> Stashed changes
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
