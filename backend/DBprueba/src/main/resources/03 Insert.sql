--use TASK;
-- cambio para que suba insert
USE todolist_db;

-- Insertar usuarios
INSERT INTO users (name, position, email, password) VALUES 
('Alice Johnson', 'Senior Lawyer', 'alice@example.com', 'password1'),
('Bob Smith', 'Junior Lawyer', 'bob@example.com', 'password2'),
('Carol White', 'Paralegal', 'carol@example.com', 'password3');

-- Insertar proyectos
INSERT INTO projects (name, description) VALUES 
('Project Alpha', 'Description for Project Alpha'),
('Project Beta', 'Description for Project Beta'),
('Project Gamma', 'Description for Project Gamma');

-- Insertar tareas
INSERT INTO tasks (name, description, due_date) VALUES 
('Task 1', 'Description for Task 1', '2024-08-01'),
('Task 2', 'Description for Task 2', '2024-08-02'),
('Task 3', 'Description for Task 3', '2024-08-03'),
('Task 4', 'Description for Task 4', '2024-08-04');

--end

-- Asignar usuarios a tareas
INSERT INTO user_tasks (user_id, task_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(1, 4);

-- Asignar proyectos a tareas
INSERT INTO project_tasks (project_id, task_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(1, 4);



