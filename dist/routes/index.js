"use strict";

var router = require('express').Router();
var actoresRoutes = require("./actores.router.js");
var comentariosRoutes = require('./actores.router.js');
var generosRoutes = require('./generos.router.js');
router.use('/api/v1/actores', actoresRoutes);
router.use('/api/v1/comentarios', comentariosRoutes);
router.use('/api/v1/generos', generosRoutes);
module.exports = router;