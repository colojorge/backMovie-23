const express = require('express');
const router = express.Router();

const controller = require('../controllers/comentarios.controller');

router.get('/', controller.resenias); // GET reseñas comentarios
router.delete('/:id', controller.destroy); // DELETE reseñas comentarios

module.exports = router;