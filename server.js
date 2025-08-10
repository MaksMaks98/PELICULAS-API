const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const precargarPeliculas = require('./seedData');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Rutas 
const peliculasRoutes = require('./src/routes/peliculasRoutes');
app.use('/peliculas', peliculasRoutes);

// Precargar datos de películas si es necesario
precargarPeliculas();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
