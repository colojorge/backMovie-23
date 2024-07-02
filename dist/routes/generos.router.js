"use strict";

var express = require('express');
var router = express.Router();
var controller = require('../controllers/generos.controller');
router.get('/', controller.generos); // GET: todos los géneros
router.post('/', controller.NewGenero); // POST: agregando un género
router.put('/:id', controller.updateGenero); // PUT: modificando un género

module.exports = router;