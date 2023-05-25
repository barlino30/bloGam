const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'productos'
});

// Conexión a la base de datos MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// Obtener todas las personas
app.get('/personas', (req, res) => {
  const query = 'SELECT * FROM personas';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Agregar una nueva persona
app.post('/personas', (req, res) => {
  const persona = req.body;
  const query = 'INSERT INTO personas SET ?';
  connection.query(query, persona, (error, result) => {
    if (error) throw error;
    res.status(201).send('Persona agregada');
  });
});

// Inicia el servidor
app.listen(4200, () => {
  console.log('Servidor iniciado en el puerto 4200');
});
