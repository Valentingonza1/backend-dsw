const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

// Validación al crear producto
router.post('/', (req, res, next) => {
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !descripcion || !precio || !stock) {
    return res.status(400).send('Faltan campos obligatorios: nombre, descripcion, precio o stock');
  }

  next(); // Si pasa la validación, va al controlador
}, productosController.crearProducto);

// Obtener todos los productos
router.get('/', productosController.obtenerProductos);

// Obtener producto por ID


// Actualizar producto (con validación)
router.put('/:id', (req, res, next) => {
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !descripcion || !precio || !stock) {
    return res.status(400).send('Faltan campos obligatorios: nombre, descripcion, precio o stock');
  }

  next();
}, productosController.actualizarProducto);

// Eliminar producto
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
