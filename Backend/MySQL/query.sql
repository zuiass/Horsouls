CREATE DATABASE hoursouls;
USE hoursouls;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

drop  table usuarios;