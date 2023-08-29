const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: '172.17.0.2',  // Nombre del contenedor de MySQL
  user: 'root',
  password: 'mysecretpassword',
  database: 'alumnosdb',
});

connection.connect();

app.get('/', (req, res) => {
  connection.query('SELECT * FROM alumnos', (error, results) => {
    if (error) throw error;
    res.send(`Hola respuesta desde el contenedor 1: ${JSON.stringify(results)}`);
  });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});
