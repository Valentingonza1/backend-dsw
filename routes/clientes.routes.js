const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes.controller');

// Validación al crear cliente
router.post('/', (req, res, next) => {
  const { nombre, direccion, telefono } = req.body;

  if (!nombre || !direccion || !telefono) {
    return res.status(400).send('Faltan campos obligatorios: nombre, direccion o telefono');
  }

  next(); // Si pasa la validación, sigue al controlador
}, clientesController.crearCliente);

// Obtener todos los clientes
router.get('/', clientesController.obtenerClientes);

// Obtener un cliente por id


// Actualizar un cliente
router.put('/:id', (req, res, next) => {
  const { nombre, direccion, telefono } = req.body;

  if (!nombre || !direccion || !telefono) {
    return res.status(400).send('Faltan campos obligatorios: nombre, direccion o telefono');
  }

  next(); // Si pasa la validación, sigue al controlador
}, clientesController.actualizarCliente);


// Eliminar un cliente
router.delete('/:id', clientesController.eliminarCliente);

module.exports = router;
