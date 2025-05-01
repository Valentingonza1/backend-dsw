const db = require('../db');

const crearProducto = (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  // Validaciones básicas
if (!nombre || nombre.trim() === '') {
  return res.status(400).send('El nombre es obligatorio');
}
if (precio === undefined || precio < 0) {
  return res.status(400).send('El precio debe ser un número positivo');
}
if (stock === undefined || stock < 0) {
  return res.status(400).send('El stock debe ser un número positivo');
}


  const query = `INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)`;

  db.query(query, [nombre, descripcion, precio, stock], (err, result) => {
    if (err) {
      console.error('Error al crear el producto:', err);
      return res.status(500).send('Error al crear el producto');
    }
    res.status(201).send('Producto creado correctamente');
  });
};

const obtenerProductos = (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err);
      return res.status(500).send('Error al obtener productos');
    }
    res.json(results);
  });
};

const actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;

  const query = `UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?`;

  db.query(query, [nombre, descripcion, precio, stock, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar el producto:', err);
      return res.status(500).send('Error al actualizar el producto');
    }
    res.send('Producto actualizado correctamente');
  });
};

const eliminarProducto = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      return res.status(500).send('Error al eliminar el producto');
    }
    res.send('Producto eliminado correctamente');
  });
};

module.exports = {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
};
