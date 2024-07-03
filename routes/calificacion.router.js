const express = require('express');
const router = express.Router();

const controller = require('../controllers/calificacion.controller');

router.get('/', controller.lista); // GET reseñas comentarios
router.delete('/:id', controller.eliminar); // DELETE reseñas comentarios
router.post('/', controller.insertar); // DELETE reseñas comentarios
module.exports = router;