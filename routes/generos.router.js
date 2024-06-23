const express = require('express');
const router = express.Router();

const controller = require('../controllers/generos.controller');

router.get('/', controller.generos); // GET: todos los generos
router.post('/', controller.NewGenero); // POST: agregando un genero

module.exports = router;