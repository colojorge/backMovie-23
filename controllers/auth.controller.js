const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');
const { connection } = require('../db/db'); // Asegúrate de tener la configuración de conexión a MySQL adecuada

const login = async (req, res = response) => {
    const { correo_electronico, contraseña } = req.body;

    try {
        // Verificar email existe
        const query = 'SELECT * FROM usuarios WHERE correo_electronico = ?';
        connection.query(query, [correo_electronico], async (error, results) => {
            if (error) {
                console.log('Error al buscar usuario:', error);
                return res.status(500).json({
                    msg: 'Hable con el admin'
                });
            }

            // Comprobar si se encontró un usuario
            if (results.length === 0) {
                return res.status(400).json({
                    msg: 'Usuario/Password no son correctos - correo'
                });
            }

            // Verificar la contraseña
            const usuario = results[0];
            const validaPassword = bcryptjs.compareSync(contraseña, usuario.contraseña);
            if (!validaPassword) {
                return res.status(400).json({
                    msg: 'Usuario/Password no son correctos - password'
                });
            }

            // Generar el JWT
            const token = await generarJWT(usuario.id);

            res.json({
                usuario,
                token
            });
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
