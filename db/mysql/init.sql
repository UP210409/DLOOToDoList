CREATE DATABASE IF NOT EXISTS task2;

grant alter, alter routine, create, create routine, create temporary tables, create view, delete, drop, event, execute, index, insert, lock tables, references, select, show view, trigger, update, grant option on `task2`.* to task2;

grant alter, alter routine, create, create routine, create temporary tables, create view, delete, drop, event, index, insert, lock tables, select, show databases, show view, trigger, update, grant option on *.* to task2;

use task2;

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
    user_id INT,
    project_id INT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);


USE task2;

-- Disable safe updates mode if necessary
-- SET SQL_SAFE_UPDATES = 0;

-- Eliminar registros de las tablas principales
-- DELETE FROM tasks;
-- DELETE FROM projects;
-- DELETE FROM users;

-- Insertar usuarios con IDs del 4 al 8
INSERT INTO users (id, name, position, email, password) VALUES
(4, 'Alice Johnson', 'Senior Lawyer', 'alice@jmabogados.com', 'password'),
(5, 'Bob Smith', 'Junior Lawyer', 'bob@jmabogados.com', 'password'),
(6, 'Carol White', 'Paralegal', 'carol@jmabogados.com', 'password'),
(7, 'David Brown', 'Intern', 'david@ejmabogados.com', 'password'),
(8, 'Eve Black', 'Consultant', 'eve@ejmabogados.com', 'password');

-- Insertar proyectos
INSERT INTO projects (id, name, description) VALUES
(1, 'Project Alpha', 'Description for Project Alpha'),
(2, 'Project Beta', 'Description for Project Beta'),
(3, 'Project Gamma', 'Description for Project Gamma'),
(4, 'Project Delta', 'Description for Project Delta'),
(5, 'Project Epsilon', 'Description for Project Epsilon');

-- Insertar tareas con usuarios y proyectos asignados
INSERT INTO tasks (user_id, project_id, name, description, due_date) VALUES
(4, 1, 'Task 1', 'Description for Task 1', '2024-08-06'), -- Alice Johnson y Project Alpha
(5, 2, 'Task 2', 'Description for Task 2', '2024-08-07'), -- Bob Smith y Project Beta
(6, 3, 'Task 3', 'Description for Task 3', '2024-08-08'), -- Carol White y Project Gamma
(4, 1, 'Task 4', 'Description for Task 4', '2024-08-09'), -- Alice Johnson y Project Alpha
(7, 4, 'Task 5', 'Description for Task 5', '2024-08-10'), -- David Brown y Project Delta
(8, 5, 'Task 6', 'Description for Task 6', '2024-08-11'); -- Eve Black y Project Epsilon