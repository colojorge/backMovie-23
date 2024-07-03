const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');
const { connection } = require('../db/db'); 

const login = async (req, res = response) => {
    const { correo_electronico, contraseña } = req.body;

    try {
        // Verificar si correo electronico existe
        const query = 'SELECT * FROM usuarios WHERE correo_electronico = ?';
        const [rows] = await connection.query(query, [correo_electronico]);

        // Comprobar si se encontró un mail
        if (rows.length === 0) {
            return res.status(400).json({
                msg: 'correo electronico invalido'
            });
        }

        // Verificar la contraseña
        const usuario = rows[0];
        const validaPassword = bcryptjs.compareSync(contraseña, usuario.contraseña);
        if (!validaPassword) {
            return res.status(400).json({
                msg: 'contraseña incorrecta'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log('Error en la autenticación:', error);
        return res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
};
module.exports = {
    login
};
