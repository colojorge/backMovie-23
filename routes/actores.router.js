const express = require('express');
const router = express.Router();

const controller = require('../controllers/actores.controller');


router.get('/', controller.index);


module.exports = router;