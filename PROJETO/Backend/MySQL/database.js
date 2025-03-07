const mysql = require('mysql2');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'horsouls'
  });
}

module.exports = createConnection;