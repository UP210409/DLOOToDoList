CREATE DATABASE IF NOT EXISTS TASK;
use TASK; 
-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Tabla de tareas
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de asociación usuario-tarea (muchos a muchos)
CREATE TABLE IF NOT EXISTS user_tasks (
    user_id INT,
    task_id INT,
    PRIMARY KEY (user_id, task_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);

-- Tabla de asociación proyecto-tarea (muchos a muchos)
CREATE TABLE IF NOT EXISTS project_tasks (
    project_id INT,
    task_id INT,
    PRIMARY KEY (project_id, task_id),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);

use TASK;

-- Eliminar registros de las tablas de asociación
DELETE FROM user_tasks;
DELETE FROM project_tasks;

-- Eliminar registros de las tablas principales
DELETE FROM tasks;
DELETE FROM projects;
DELETE FROM users;

-- Insertar usuarios con IDs del 4 al 8
INSERT INTO users (id, name, position, email, password) VALUES 
(4, 'Alice Johnson', 'Senior Lawyer', 'alice@example.com', 'password1'),
(5, 'Bob Smith', 'Junior Lawyer', 'bob@example.com', 'password2'),
(6, 'Carol White', 'Paralegal', 'carol@example.com', 'password3'),
(7, 'David Brown', 'Intern', 'david@example.com', 'password4'),
(8, 'Eve Black', 'Consultant', 'eve@example.com', 'password5');

-- Insertar proyectos
INSERT INTO projects (name, description) VALUES 
('Project Alpha', 'Description for Project Alpha'),
('Project Beta', 'Description for Project Beta'),
('Project Gamma', 'Description for Project Gamma'),
('Project Delta', 'Description for Project Delta'),
('Project Epsilon', 'Description for Project Epsilon');

-- Insertar tareas
INSERT INTO tasks (name, description, due_date) VALUES 
('Task 1', 'Description for Task 1', '2024-08-06'), -- Hoy
('Task 2', 'Description for Task 2', '2024-08-07'), -- Mañana
('Task 3', 'Description for Task 3', '2024-08-08'), -- Pasado mañana
('Task 4', 'Description for Task 4', '2024-08-09'), -- Esta semana
('Task 5', 'Description for Task 5', '2024-08-10'), -- Esta semana
('Task 6', 'Description for Task 6', '2024-08-11'); -- Esta semana

-- Asignar usuarios a tareas
INSERT INTO user_tasks (user_id, task_id) VALUES 
(4, 1), -- Alice Johnson a Task 1
(5, 2), -- Bob Smith a Task 2
(6, 3), -- Carol White a Task 3
(4, 4), -- Alice Johnson a Task 4
(7, 5), -- David Brown a Task 5
(8, 6); -- Eve Black a Task 6

-- Asignar proyectos a tareas
INSERT INTO project_tasks (project_id, task_id) VALUES 
(1, 1), -- Project Alpha a Task 1
(2, 2), -- Project Beta a Task 2
(3, 3), -- Project Gamma a Task 3
(1, 4), -- Project Alpha a Task 4
(4, 5), -- Project Delta a Task 5
(5, 6); -- Project Epsilon a Task 6