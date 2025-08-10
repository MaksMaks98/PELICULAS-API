const Pelicula = require('../models/pelicula');
exports.crearPelicula = async (req, res) => {
  try {
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.status(201).json(pelicula);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listarPeliculas = async (req, res) => {
  const peliculas = await Pelicula.find();
  res.json(peliculas);
};

exports.editarPelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pelicula);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarPelicula = async (req, res) => {
  try {
    await Pelicula.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Pelicula eliminada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Endpoint de negocio
exports.recomendadas = async (req, res) => {
  const peliculas = await Pelicula.find();
  if (peliculas.length === 0) return res.json([]);
// Contar cuántas películas hay por género
  const conteo = {};
  peliculas.forEach(p => conteo[p.genero] = (conteo[p.genero] || 0) + 1);
// Encontrar el género más visto
  const generoMasVisto = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);
// Filtrar las películas del género más visto
  const recomendadas = peliculas.filter(p => p.genero === generoMasVisto);

  res.json({ genero: generoMasVisto, peliculas: recomendadas });
};
