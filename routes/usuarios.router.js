// app.js
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    } = require('../middlewares/validar-campos');

const { obtenerUsuario, crearUsuario, tenerUsuarioById, borrarUsuarioById,actualizarUsuario } = require('../controllers/usuarios.controller');
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validator');
const router = Router();




router.get('/',obtenerUsuario);

router.post('/', crearUsuario);

router.get('/:id', tenerUsuarioById);

router.put('/:id',[
    check('id').custom(existeUsuarioPorId),
    validarCampos
], actualizarUsuario);

router.delete('/:id', borrarUsuarioById);

/*
router.delete('/:id', deleteUser);*/


module.exports = router