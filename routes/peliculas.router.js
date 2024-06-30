const { Router } = require('express');
const { check } = require('express-validator');

const { 
    obtenerPeliculas, 
    obtenerPeliculaPorId, 
    crearPelicula,
    actualizarPelicula, 
    eliminarPelicula } = require('../controllers/peliculas.controller');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');

const { existePeliculaPorId, existePelicula,  } = require('../helpers/db-validator');

const router = Router();

router.get('/', obtenerPeliculas);

router.get('/:id', [
    check('id').custom(existePeliculaPorId),
    validarCampos
], obtenerPeliculaPorId);

router.post('/',[
    validarJWT,
    check('titulo', 'El título es obligatorio').not().isEmpty(),
    check('año_estreno', 'El año de estreno es obligatorio').not().isEmpty().isInt(),
    check('genero_id', 'El ID del género es obligatorio').not().isEmpty().isInt(),
    check('director', 'El nombre del director es obligatorio').not().isEmpty(),
    check('calificacion', 'La calificación es obligatoria').not().isEmpty().isFloat(),
    check('nombre_actor', 'Los actores son obligatorios y deben ser un array no vacío').isArray({ min: 1 }),
    existePelicula,
    validarCampos
], crearPelicula);

router.put('/:id',[
    validarJWT,
    check('id').custom(existePeliculaPorId),
    check('titulo', 'El título es obligatorio').not().isEmpty(),
    check('año_estreno', 'El año de estreno es obligatorio').not().isEmpty().isInt(),
    check('genero_id', 'El ID del género es obligatorio').not().isEmpty().isInt(),
    check('director', 'El nombre del director es obligatorio').not().isEmpty(),
    check('calificacion', 'La calificación es obligatoria').not().isEmpty().isFloat(),
    check('actores', 'Los actores son obligatorios y deben ser un array no vacío').isArray({ min: 1 }),    
    validarCampos
], actualizarPelicula);

router.delete('/:id',[
    validarJWT,
    check('id').custom(existePeliculaPorId),
    validarCampos
], eliminarPelicula);

module.exports = router;
