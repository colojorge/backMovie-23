const { response } = require('express');


const { commentsMovieId, createComment, commentDetails } = require('../models/Comentario.model');
const { getMovieById } = require('../models/Pelicula.model'); // Asegúrate de importar el método getMovieById desde tu modelo de películas

// OBTENER LOS COMENTARIOS DE PELICULA POR ID

const obtenerComentarios = async (req, res = response) => {
    const { id } = req.params;
    try {
        // Obtener la película por su ID
        const pelicula = await getMovieById(id);
        if (!pelicula) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }

        // Obtener todos los comentarios de la película por su ID
        const comentarios = await commentsMovieId(id);

        // Si no hay comentarios, obtener los datos de la película
        if (comentarios.length === 0) {
            const pelicula = await getMovieById(id);
            if (!pelicula) {
                return res.status(404).json({ message: 'Película no encontrada' });
            }
            return res.json({
                pelicula,
                comentarios: 'Esta película no tiene comentarios aún'
            })
        }

        res.json({
            pelicula,
            comentarios
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREAR COMENTARIO

const agregarComentario = async (req, res = response) => {
    const { usuario_id, comentario } = req.body;
    const { id } = req.params;

    try {
        // Crear el comentario
        const comentarioId = await createComment(id, usuario_id, comentario);

        // Obtener los detalles del comentario
        const comentarioDetalles = await commentDetails(comentarioId);

        // Responder con los detalles del comentario, el usuario y la película
        res.status(201).json({
            message: 'Comentario creado exitosamente',
            pelicula: comentarioDetalles.nombre_pelicula,
            usuario: comentarioDetalles.nombre_usuario,
            comentario: comentarioDetalles.comentario,       
            
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerComentarios, 
    agregarComentario
};
