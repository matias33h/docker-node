
CREATE DATABASE IF NOT EXISTS alumnosdb;


USE alumnosdb;


CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apellidos VARCHAR(200),
    nombres VARCHAR(200),
    dni INT(11)
);


INSERT INTO alumnos (apellidos, nombres, dni) VALUES
    ('García', 'Juan', 345678901),
    ('López', 'María', 456789012),
    ('Martínez', 'Carlos', 367890123);