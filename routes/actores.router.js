const express = require('express');
const router = express.Router();

const controller = require('../controllers/actores.controller');

router.get('/', controller.index); // GET: todos los actores
router.get('/:id', controller.actorID); // GET: actor por id

module.exports = router;