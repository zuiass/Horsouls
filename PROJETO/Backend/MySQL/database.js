import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'horsouls'
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Consultar dados
connection.query('SELECT * FROM usuarios', (err, results) => {
  if (err) {
    console.error('Erro ao consultar dados:', err);
  } else {
    console.log('Resultados:', results);
  }
});

connection.end();