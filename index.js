const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db'); // Conecta a la base de datos

app.use(cors());
app.use(express.json());

// Rutas
const productosRoutes = require('./routes/productos.routes');
const clientesRoutes = require('./routes/clientes.routes');

app.use('/productos', productosRoutes);
app.use('/clientes', clientesRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Backend de la carnicería funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
