import express from 'express';
import path from 'path';
import cors from 'cors';
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


app.get('/api/propiedades/venta', (req, res) => {
  res.send(propiedadesEnVenta)
})
app.get('/api/propiedades/alquiler', (req, res) => {
  res.send(propiedadesEnAlquiler)
})
app.get('/api/subscripcion', (req, res) => {
  res.send(subscriptoAlNewsletter)
})


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})