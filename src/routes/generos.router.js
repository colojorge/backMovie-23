const express = require('express');
const router = express.Router();

const controller = require('../controllers/generos.controller');

router.get('/', controller.generos); // GET: todos los géneros
router.post('/', controller.NewGenero); // POST: agregando un género
router.put('/:id', controller.updateGenero); // PUT: modificando un género

module.exports = router;