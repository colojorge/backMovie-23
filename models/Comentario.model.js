// Importar la conexión a la base de datos
const { connection } = require('../db/db');

// Función para obtener todos los comentarios de una película por su ID
const commentsMovieId = async (peliculaId) => {
    const query = `
        SELECT c.id, c.comentario, u.nombre_usuario AS nombre_usuario
        FROM comentarios c
        INNER JOIN usuarios u ON c.usuario_id = u.id
        WHERE c.pelicula_id = ?
    `;
    try {
        const [rows] = await connection.query(query, [peliculaId]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener los comentarios de la película: ${error.message}`);
    }
};

// Función para crear un nuevo comentario
const createComment = async (peliculaId, usuarioId, comentario) => {
    const query = `
        INSERT INTO comentarios (pelicula_id, usuario_id, comentario)
        VALUES (?, ?, ?)
    `;
    try {
        const [result] = await connection.query(query, [peliculaId, usuarioId, comentario]);
        return result.insertId;
    } catch (error) {
        throw new Error(`Error al crear el comentario: ${error.message}`);
    }
};

const commentDetails = async (comentarioId) => {
    const query = `
        SELECT 
            c.comentario,
            u.nombre_usuario,
            p.titulo AS nombre_pelicula
        FROM 
            comentarios c
            JOIN usuarios u ON c.usuario_id = u.id
            JOIN peliculas p ON c.pelicula_id = p.id
        WHERE 
            c.id = ?
    `;

    try {
        const [rows] = await connection.query(query, [comentarioId]);
        if (rows.length > 0) {
            return rows[0];
        } else {
            throw new Error('Comentario no encontrado');
        }
    } catch (error) {
        throw new Error(`Error al obtener los detalles del comentario: ${error.message}`);
    }
};
module.exports = {
    commentsMovieId,
    createComment,
    commentDetails
};
