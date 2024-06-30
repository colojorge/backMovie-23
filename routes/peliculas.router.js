const { Router } = require('express');
const { obtenerPeliculas, obtenerPeliculaPorId, crearPelicula, actualizarPelicula, eliminarPelicula } = require('../controllers/peliculas.controller');

const router = Router();

router.get('/', obtenerPeliculas);
router.get('/:id', obtenerPeliculaPorId);
router.post('/', crearPelicula);
router.put('/:id', actualizarPelicula);
router.delete('/:id', eliminarPelicula);

module.exports = router;
