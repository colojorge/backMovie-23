const { connection } = require('../db/db');


const crearUser = async (userData) => {
    const { nombre_usuario, correo_electronico, contraseña } = userData;
    const query = `
    INSERT INTO usuarios (nombre_usuario, correo_electronico, contraseña, fecha_registro)
    VALUES (?, ?, ?, CURDATE())
    `;

    const values = [nombre_usuario, correo_electronico, contraseña];
    //const [result] => utiliza desestructuración de arreglos en JavaScript para extraer el primer elemento del arreglo que retorna la función query.
    try {
        const [result] = await connection.query(query, values);
        return {
            id: result.insertId,
            ...userData
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllUsers = async () => {
    const query = `
        SELECT * FROM usuarios
    `;

    try {
        const [rows] = await connection.query(query);
        return rows;        
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (id) => {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    try {
        const [user] = await connection.query(query, [id]);
        return user[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateUser = async (id, userData) => {
    const { nombre_usuario, correo_electronico, contraseña } = userData;
    const query = `
        UPDATE usuarios
        SET nombre_usuario = ?, correo_electronico = ?, contraseña = ? WHERE id = ?
    `;
    const values = [nombre_usuario, correo_electronico, contraseña, id ];

    try {
        const [result] = await connection.query(query, values);
        return result.affectedRows;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteUserById = async (id) => {
    const query = `
        DELETE FROM usuarios
        WHERE id = ?
    `;

    try {
        const [result] = await connection.query(query, [id]);
        return result.affectedRows;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByEmail = async (correo_electronico) => {
    const query = `SELECT * FROM usuarios WHERE correo_electronico = ?`;

    try {
        const [user] = await connection.query(query, [correo_electronico]);
        return user[0];
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {
    crearUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById,
    getUserByEmail
};
