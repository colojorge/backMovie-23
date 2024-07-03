const { response } = require('express');
const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/Usuario.model');



// VALIDAR JWT

const validarJWT = async(req, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // Leer el usuario que corresponde al uid
        const usuario = await getUserById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Usuario no existe'
            });
        }        

        req.usuario = usuario;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
};

module.exports = {
    validarJWT
};

















