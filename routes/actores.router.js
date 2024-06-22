const express = require('express');
const router = express.Router();

const controller = require('../controllers/actores.controller');


router.get('/', controller.index);
router.get('/:id', controller.actorID); // actor por id


module.exports = router;