CREATE DATABASE IF NOT EXISTS TASK2;

-- drop user 'task'@'localhost';     sensible a Mayusculas
-- SET PASSWORD FOR  'task'@'localhost' = PASSWORD ('task')

CREATE USER 'task2'@'localhost' IDENTIFIED BY 'task2';

GRANT ALL PRIVILEGES ON TASK2.* TO 'task2'@'localhost';

flush privileges;


