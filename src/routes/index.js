
const router = require('express').Router();
const actoresRoutes = require("./actores.router.js")
const comentariosRoutes = require('./actores.router.js')
const generosRoutes = require('./generos.router.js')

router.use('/api/v1/actores',actoresRoutes)
router.use('/api/v1/comentarios',comentariosRoutes)
router.use('/api/v1/generos',generosRoutes)

module.exports = router;