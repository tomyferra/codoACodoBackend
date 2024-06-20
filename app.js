import express from 'express';
import path from 'path';
import cors from 'cors';
import pool from './config/db.js'
import { propiedadesEnVenta, propiedadesEnAlquiler, subscriptoAlNewsletter } from './datos.js'
import { fileURLToPath } from 'url' // To handle __dirname with ES6 modules

const app = express()

const port = 3000
app.use(cors());
app.use(express.json()) // For parsing application/json
app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded


// Static Files
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

// ########################################################################################################
app.get('/api/propiedades/venta/local', (req, res) => {
  res.send(propiedadesEnVenta)
})
// Route to insert data into the table suscripciones
app.post('/api/suscripciones', async (req, res) => {
  const { Nombre, Apellido, Correo, PropiedadesDeInteres } = req.body;
  const insertQuery = `
    INSERT INTO Suscriptos (Nombre, Apellido, Correo, PropiedadesDeInteres)
    VALUES (?, ?, ?, ?)
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [Nombre, Apellido, Correo, PropiedadesDeInteres]);
    connection.release();
    console.log('Record inserted successfully');
    res.json({ message: 'Record inserted successfully' });
  } catch (err) {
    console.error('Error inserting record: ', err);
    res.sendStatus(500);
  }
});

// Route to get data into the table suscripciones
app.get('/api/subscripciones', async (req, res) => {
  try {
    const rol = req.query.rol
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM Suscriptos')
    console.log('Suscriptos--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// Route to insert data into the table PropiedadesAlquiler
app.post('/api/propiedades/alquiler', async (req, res) => {
  const { foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio } = req.body;
  const insertQuery = `
    INSERT INTO PropiedadesAlquiler (foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio]);
    connection.release();
    console.log('Record inserted successfully');
    res.json({ message: 'Record inserted successfully' });
  } catch (err) {
    console.error('Error inserting record: ', err);
    res.sendStatus(500);
  }
});

// Route to get data into the table PropiedadesAlquiler
app.get('/api/propiedades/alquiler', async (req, res) => {
  try {
    const rol = req.query.rol
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM PropiedadesAlquiler')
    console.log('PropiedadesAlquiler--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// Route to insert data into the table PropiedadesVenta
app.post('/api/propiedades/venta', async (req, res) => {
  const { foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio } = req.body;
  const insertQuery = `
    INSERT INTO PropiedadesVenta (foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio]);
    connection.release();
    console.log('Record inserted successfully');
    res.json({ message: 'Record inserted successfully' });
  } catch (err) {
    console.error('Error inserting record: ', err);
    res.sendStatus(500);
  }
});

// Route to get data into the table PropiedadesVenta
app.get('/api/propiedades/venta', async (req, res) => {
  try {
    const rol = req.query.rol
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM PropiedadesVenta')
    console.log('PropiedadesVenta--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})





app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})








// SQL command to create the table
const executeQuery = `
CREATE TABLE PropiedadesAlquiler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto1 VARCHAR(255),
    foto2 VARCHAR(255),
    foto3 VARCHAR(255),
    titulo VARCHAR(255),
    fotoAlt VARCHAR(255),
    descripcion TEXT,
    habitaciones INT,
    tipo VARCHAR(100),
    metros DECIMAL(10, 2),
    precio DECIMAL(10, 2)
)
`;
// SQL command to create the table
const executeQuery2 = `
SHOW TABLES
`;


// Route to execute the query to create the table
app.post('/executeQuery', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const resp = await connection.query(executeQuery);
    connection.release();
    console.log(resp);
    res.json({ message: 'query executed successfully' });
  } catch (err) {
    console.error('Error executing query: ', err);
    res.sendStatus(500);
  }
});
