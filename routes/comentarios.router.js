const express = require('express');
const { check } = require('express-validator');

const { obtenerComentarios, agregarComentario } = require('../controllers/comentarios.controller');
const { existePeliculaPorId } = require('../helpers/db-validator');

const { validarCampos } = require('../middlewares/validar-campos');


const router = express.Router();

router.get('/:id',[
    check('id').custom(existePeliculaPorId),
    validarCampos
],obtenerComentarios ); 

router.post('/:id',[
    check('id').custom(existePeliculaPorId),    
], agregarComentario); 

module.exports = router;