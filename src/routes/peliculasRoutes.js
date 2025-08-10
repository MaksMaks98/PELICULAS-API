const express = require('express');
const router = express.Router();
const { crearPelicula, listarPeliculas, editarPelicula, eliminarPelicula, recomendadas } = require('../controllers/peliculas.controller');

// Rutas para manejar las películas
router.post('/', crearPelicula);
router.get('/', listarPeliculas);
router.put('/:id', editarPelicula);
router.delete('/:id', eliminarPelicula);

// Ruta de negocio para recomendaciones
router.get('/recomendadas', recomendadas);

// Exportar el router para usarlo en el servidor principal
module.exports = router;
