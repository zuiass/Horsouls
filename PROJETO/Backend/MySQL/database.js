const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'horsouls'
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados", err);
  } else {
    console.log('Conectado ao MySQL: ', database);
  }
});

connection.end();