"use strict";

var express = require('express');
var router = express.Router();
var controller = require('../controllers/comentarios.controller');
router.get('/', controller.resenias); // GET reseñas comentarios
router["delete"]('/:id', controller.destroy); // DELETE reseñas comentarios

module.exports = router;