"use strict";

var express = require('express');
var router = express.Router();
var controller = require('../controllers/actores.controller');
router.get('/', controller.index); // GET: todos los actores
router.get('/:id', controller.actorID); // GET: actor por id

module.exports = router;