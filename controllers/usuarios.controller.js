const bcryptjs = require('bcryptjs');

const { crearUser, getAllUsers, getUserById, updateUser,deleteUserById } = require('../models/Usuario.model');

// OBTENER TODOS LOS USUARIOS
const obtenerUsuario = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// OBTENER USUARIO POR ID
const tenerUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREAR USUARIOS
const crearUsuario = async (req, res) => {
    const { nombre_usuario, correo_electronico, contraseña } = req.body;
    try {
        // Generar el salto para el hash
        const salt = bcryptjs.genSaltSync();
        // Hashear la contraseña
        const hashedPassword = bcryptjs.hashSync(contraseña, salt);

        // Crear el usuario con la contraseña hasheada
        const newUser = await crearUser({
            nombre_usuario, 
            correo_electronico,             
            contraseña: hashedPassword,            
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//ACTUALIZAR USUARIO
const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre_usuario, correo_electronico, contraseña } = req.body;

    try {
        // Verificar si se proporcionó una nueva contraseña
        let hashedPassword;
        if (contraseña) {
            const salt = await bcryptjs.genSalt(10);
            hashedPassword = await bcryptjs.hash(contraseña, salt);
        }

        const actualizarData = {
            nombre_usuario,
            correo_electronico,
            contraseña: hashedPassword // Si contraseña existe, se guarda la versión cifrada
        };

        const actualizar = await updateUser(id, actualizarData);

        if (actualizar === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//BORRAR USUARIO
const borrarUsuarioById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteUserById(id);

        if (result === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    obtenerUsuario,
    tenerUsuarioById,
    crearUsuario,
    actualizarUsuario,
    borrarUsuarioById
};


