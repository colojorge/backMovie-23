// app.js
const { Router } = require('express');
const { check } = require('express-validator');

const {
    obtenerUsuario,
    crearUsuario,
    tenerUsuarioById,
    borrarUsuarioById,
    actualizarUsuario } = require('../controllers/usuarios.controller');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');

const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validator');

const router = Router();

//Obtener todos los usuarios
router.get('/', obtenerUsuario);

//Obtener usuarios por ID
router.get('/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], tenerUsuarioById);

//Crear usuario
router.post('/', [
    check('nombre_usuario', 'el nombre es obligatorio').not().isEmpty(),
    check('contraseña', 'password mayor a 6 letras').isLength({ min: 6 }),
    check('correo_electronico', 'Correo invalido').isEmail(),
    check('correo_electronico').custom(emailExiste),
    validarCampos
], crearUsuario);

//Actualizar usuario
router.put('/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], actualizarUsuario);

//Eliminar usuario
router.delete('/:id', [
    validarJWT,
    check('id').custom(existeUsuarioPorId),
    validarCampos
], borrarUsuarioById);

module.exports = router



