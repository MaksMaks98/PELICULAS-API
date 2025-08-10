const mongoose = require('mongoose');
// Definición del esquema para la colección de películas
const PeliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  anio: Number,
  valoracion: Number
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);
