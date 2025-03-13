CREATE DATABASE horsouls;
USE horsouls;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(6) DEFAULT 'Padrão',
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome, email, senha)
values ("Kayke", "kayke@email.com", "12345687")