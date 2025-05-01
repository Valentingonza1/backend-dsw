const db = require('../db');

const crearCliente = (req, res) => {
  const { nombre, direccion, telefono } = req.body;

  const query = `INSERT INTO clientes (nombre, direccion, telefono) VALUES (?, ?, ?)`;

  db.query(query, [nombre, direccion, telefono], (err, result) => {
    if (err) {
      console.error('Error al crear el cliente:', err);
      return res.status(500).send('Error al crear el cliente');
    }
    res.status(201).send('Cliente creado correctamente');
  });
};

const obtenerClientes = (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error('Error al obtener clientes:', err);
      return res.status(500).send('Error al obtener clientes');
    }
    res.json(results);
  });
};

const actualizarCliente = (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, telefono } = req.body;

  const query = `UPDATE clientes SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?`;

  db.query(query, [nombre, direccion, telefono, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar el cliente:', err);
      return res.status(500).send('Error al actualizar el cliente');
    }
    res.send('Cliente actualizado correctamente');
  });
};

const eliminarCliente = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el cliente:', err);
      return res.status(500).send('Error al eliminar el cliente');
    }
    res.send('Cliente eliminado correctamente');
  });
};

module.exports = {
  crearCliente,
  obtenerClientes,
  actualizarCliente,
  eliminarCliente
};
