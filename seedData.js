/**
seedData.js es un script para precargar datos de películas en la base de datos si la colección está vacía.
    * Precarga películas desde un archivo JSON en la base de datos si no existen registros previos.
    * - Verifica si la colección de películas ya tiene datos.
    * - Si está vacía, lee el archivo 'peliculas.json' y los inserta en la base de datos.
    * - Muestra mensajes en consola según el resultado.
    */

const fs = require('fs');
const path = require('path');
const Pelicula = require('./src/models/pelicula');

const precargarPeliculas = async () => {
  try {
    // Verificar si ya hay datos en la colección
    const count = await Pelicula.countDocuments();
    if (count > 0) {
      console.log('📀 Ya existen películas. No se precargó nada.');
      return;
    }

    // Leer JSON
    const dataPath = path.join(__dirname, 'peliculas.json');
    const peliculas = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Insertar en la base
    await Pelicula.insertMany(peliculas);
    console.log('✅ Películas precargadas correctamente.');
  } catch (error) {
    console.error('❌ Error al precargar películas:', error);
  }
};

module.exports = precargarPeliculas;
