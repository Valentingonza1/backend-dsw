//BACKUP DEL INDEX
//BACKUP DEL INDEX
//BACKUP DEL INDEX
//BACKUP DEL INDEX
//BACKUP DEL INDEX
//BACKUP DEL INDEX
//BACKUP DEL INDEX



const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());


// Crear la conexión con MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Dejalo vacío si no pusiste contraseña
  database: 'carniceria'
});

// Probar conexión
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos MySQL exitosa');
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend conectado a MySQL!');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

// Ruta para crear un producto
app.post('/productos', (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
  
    const query = `INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)`;
    
    db.query(query, [nombre, descripcion, precio, stock], (err, result) => {
      if (err) {
        console.error('Error al insertar el producto:', err);
        return res.status(500).send('Error al crear el producto');
      }
      res.status(201).send('Producto creado correctamente');
    });
  });
  // Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
    const query = 'SELECT * FROM productos';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener productos:', err);
        return res.status(500).send('Error al obtener los productos');
      }
      res.json(results);
    });
  });

  // Ruta para actualizar un producto
app.put('/productos/:id', (req, res) => {
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
});
// Ruta para eliminar un producto
app.delete('/productos/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM productos WHERE id = ?`;

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      return res.status(500).send('Error al eliminar el producto');
    }
    res.send('Producto eliminado correctamente');
  });
});
app.post('/clientes', (req, res) => {
  const { nombre, direccion, telefono, email } = req.body;

  const query = `INSERT INTO clientes (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)`;

  db.query(query, [nombre, direccion, telefono, email], (err, result) => {
    if (err) {
      console.error('Error al crear el cliente:', err);
      return res.status(500).send('Error al crear el cliente');
    }
    res.status(201).send('Cliente creado correctamente');
  });
});
app.get('/clientes', (req, res) => {
  const query = 'SELECT * FROM clientes';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los clientes:', err);
      return res.status(500).send('Error al obtener los clientes');
    }
    res.json(results);
  });
});
app.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, telefono, email } = req.body;

  const query = `UPDATE clientes SET nombre = ?, direccion = ?, telefono = ?, email = ? WHERE id = ?`;

  db.query(query, [nombre, direccion, telefono, email, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar el cliente:', err);
      return res.status(500).send('Error al actualizar el cliente');
    }
    res.send('Cliente actualizado correctamente');
  });
});app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM clientes WHERE id = ?`;

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el cliente:', err);
      return res.status(500).send('Error al eliminar el cliente');
    }
    res.send('Cliente eliminado correctamente');
  });
});

