import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // To handle __dirname with ES6 modules
import pool from './config/db.js';

const app = express()

const port = 3000
app.use(cors());
app.use(express.json()) // For parsing application/json
app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded


// index.html
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))


// Route to get data into the table PropiedadesAlquiler
app.get('/api/propiedades', async (req, res) => {
  try {
    const rol = req.query.rol
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM Propiedades')
    console.log('Propiedades--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// Route to get data into the table alquiler
app.get('/api/alquiler', async (req, res) => {
  try {
    const rol = req.query.rol
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM Propiedades JOIN Alquiler ON Alquiler.propiedad_id = Propiedades.id') //aca deberia ir un join de las propiedades la tabla de alquiler
    console.log('Propiedades en Alquiler--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// Route to get data into the table venta
app.get('/api/venta', async (req, res) => {
  try {
    const rol = req.query.rol
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM Propiedades JOIN Venta ON Venta.propiedad_id = Propiedades.id') //aca deberia ir un join de las propiedades la tabla de venta
    console.log('Propiedades en Venta--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// Route to get data into the table propietarios
app.get('/api/propietarios', async (req, res) => {
  try {
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM Propietarios')
    console.log('Propietarios--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// Route to get data into the table propietarios
app.get('/api/ubicaciones', async (req, res) => {
  try {
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM Ubicaciones')
    console.log('Ubicaciones--> ', rows)
    connection.release()

    res.json(rows)
  } catch (err) {
    console.error('Error executing query: ', err)
    res.sendStatus(500)
  }
})

// ################################################################################
// ################################################################################
// ################################################################################


// Route to insert data into the table PropiedadesAlquiler
app.post('/api/propiedades', async (req, res) => {
  const { foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio, operacion, ubicacion_id, propietario_id } = req.body;
  const insertQuery = `
    INSERT INTO Propiedades (foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio, operacion, ubicacion_id, propietario_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio, operacion, ubicacion_id, propietario_id]);
    connection.release();
    console.log('Propiedad inserted successfully');
    res.json({ message: 'Propiedad inserted successfully' });
  } catch (err) {
    console.error('Error inserting Propiedad: ', err);
    res.sendStatus(500);
  }
});

// Route to insert data into the table PropiedadesAlquiler
app.post('/api/alquiler', async (req, res) => {
  const { propiedad_id } = req.body;
  const checkAlquiler = `
    SELECT 1 FROM Alquiler WHERE propiedad_id = ?;
  `;
  const checkPropiedad = `
    SELECT 1 FROM Propiedades WHERE id = ?;
  `;
  const insertQuery = `
    INSERT INTO Alquiler (propiedad_id)
    VALUES (?)
  `;
  try {
    const connection = await pool.getConnection();

    // Verificar si el campo propiedad_id ya existe en la tabla
    const [rows] = await connection.query(checkAlquiler, [propiedad_id]);
    if (rows.length > 0) {
      connection.release();
      console.log('La propiedad ya existe en alquiler');
      return res.status(409).json({ message: 'La propiedad ya existe en alquiler' });
    }
    const [propiedad] = await connection.query(checkPropiedad, [propiedad_id]);
    if (propiedad.length == 0) {
      connection.release();
      console.log('La propiedad no existe');
      return res.status(409).json({ message: 'La propiedad no existe' });
    }
    await connection.query(insertQuery, [propiedad_id]);
    connection.release();
    console.log('Propiedad inserted successfully');
    res.json({ message: 'Propiedad inserted successfully' });
  } catch (err) {
    console.error('Error inserting Propiedad: ', err);
    res.sendStatus(500);
  }
});

// Route to insert data into the table PropiedadesAlquiler
app.post('/api/venta', async (req, res) => {
  const { propiedad_id } = req.body;
  const checkQuery = `
    SELECT 1 FROM Venta WHERE propiedad_id = ?;
  `;
  const checkPropiedad = `
    SELECT 1 FROM Propiedades WHERE id = ?;
  `;
  const insertQuery = `
    INSERT INTO Venta (propiedad_id)
    VALUES (?)
  `;
  try {
    const connection = await pool.getConnection();

    // Verificar si el campo propiedad_id ya existe en la tabla
    const [rows] = await connection.query(checkQuery, [propiedad_id]);
    if (rows.length > 0) {
      connection.release();
      console.log('La propiedad ya existe en venta');
      return res.status(409).json({ message: 'La propiedad ya existe en venta' });
    }
    const [propiedad] = await connection.query(checkPropiedad, [propiedad_id]);
    if (propiedad.length == 0) {
      connection.release();
      console.log('La propiedad no existe');
      return res.status(409).json({ message: 'La propiedad no existe' });
    }
    await connection.query(insertQuery, [propiedad_id]);
    connection.release();
    console.log('Propiedad inserted successfully');
    res.json({ message: 'Propiedad inserted successfully' });
  } catch (err) {
    console.error('Error inserting Propiedad: ', err);
    res.sendStatus(500);
  }
});

// Route to insert data into the table propietarios
app.post('/api/propietarios', async (req, res) => {
  const { nombre, apellido, correo, telefono } = req.body;
  const insertQuery = `
    INSERT INTO Propietarios (nombre, apellido, correo, telefono)
    VALUES (?, ?, ?, ?)
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [nombre, apellido, correo, telefono]);
    connection.release();
    console.log('Propietario inserted successfully');
    res.json({ message: 'Propietario inserted successfully' });
  } catch (err) {
    console.error('Error inserting Propietario: ', err);
    res.sendStatus(500);
  }
});

// Route to insert data into the table propietarios
app.post('/api/ubicaciones', async (req, res) => {
  const { nombre } = req.body;
  const insertQuery = `
    INSERT INTO Ubicaciones (nombre)
    VALUES (?)
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [nombre]);
    connection.release();
    console.log('Ubicacion inserted successfully');
    res.json({ message: 'Ubicacion inserted successfully' });
  } catch (err) {
    console.error('Error inserting Ubicacion: ', err);
    res.sendStatus(500);
  }
});

// ################################################################################
// ################################################################################
// ################################################################################

// Metodo para remover de la tabla de Alquiler una propiedad (por que ya fue alquilada)
app.delete('/api/alquiler/borrar/:id', async (req, res) => {
  const { id } = req.params;
  const insertQuery = `
  DELETE FROM Alquiler
  WHERE propiedad_id = ?;
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [id]);
    connection.release();
    res.json({ message: 'Id successfully deleted' });
  } catch (err) {
    console.error('Error when deleting Id: ', err);
    res.sendStatus(500);
  }
});

// Metodo para remover de la tabla de Ventas una propiedad (por que ya fue vendida)
app.delete('/api/venta/borrar/:id', async (req, res) => {
  const { id } = req.params;
  const insertQuery = `
  DELETE FROM Venta
  WHERE propiedad_id = ?;
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(insertQuery, [id]);
    connection.release();
    res.json({ message: 'Id successfully deleted' });
  } catch (err) {
    console.error('Error when deleting Id: ', err);
    res.sendStatus(500);
  }
});

// ################################################################################
// ################################################################################
// ################################################################################


// Route to update data in the table Propiedades
app.put('/api/propiedades/:id', async (req, res) => {
  const { id } = req.params;
  const { foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio, operacion, ubicacion_id, propietario_id } = req.body;
  const updateQuery = `
    UPDATE Propiedades
    SET foto1 = ?, foto2 = ?, foto3 = ?, titulo = ?, fotoAlt = ?, descripcion = ?, habitaciones = ?, tipo = ?, metros = ?, precio = ?, operacion = ?, ubicacion_id = ?, propietario_id = ?
    WHERE id = ?
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(updateQuery, [foto1, foto2, foto3, titulo, fotoAlt, descripcion, habitaciones, tipo, metros, precio, operacion, ubicacion_id, propietario_id, id]);
    connection.release();
    console.log('Propiedad updated successfully');
    res.json({ message: 'Propiedad updated successfully' });
  } catch (err) {
    console.error('Error updating Propiedad: ', err);
    res.sendStatus(500);
  }
});


// Route to update data in the table Propietarios
app.put('/api/propietarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correo, telefono } = req.body;
  const updateQuery = `
    UPDATE Propietarios
    SET nombre = ?, apellido = ?, correo = ?, telefono = ?
    WHERE id = ?
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(updateQuery, [nombre, apellido, correo, telefono, id]);
    connection.release();
    console.log('Propietario updated successfully');
    res.json({ message: 'Propietario updated successfully' });
  } catch (err) {
    console.error('Error updating Propietario: ', err);
    res.sendStatus(500);
  }
});


// Route to update data in the table Propiedades with PATCH
app.patch('/api/propiedades/:id', async (req, res) => {
  const { id } = req.params;
  const allowedFields = ['foto1', 'foto2', 'foto3', 'titulo', 'fotoAlt', 'descripcion', 'habitaciones', 'tipo', 'metros', 'precio', 'operacion', 'ubicacion_id', 'propietario_id'];
  const updates = Object.keys(req.body)
    .filter(key => allowedFields.includes(key))
    .map(key => `${key} = ?`);

  const values = Object.values(req.body);

  if (updates.length === 0) {
    return res.status(400).json({ message: 'No valid fields provided for update' });
  }

  const updateQuery = `
    UPDATE Propiedades
    SET ${updates.join(', ')}
    WHERE id = ?
  `;

  values.push(id);

  try {
    const connection = await pool.getConnection();
    await connection.query(updateQuery, values);
    connection.release();
    console.log('Propiedad updated successfully');
    res.json({ message: 'Propiedad updated successfully' });
  } catch (err) {
    console.error('Error updating Propiedad: ', err);
    res.sendStatus(500);
  }
});


// ################################################################################
// ################################################################################
// ################################################################################


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})








// SQL command to create the table
const executeQuery = `
DESCRIBE Propiedades

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
