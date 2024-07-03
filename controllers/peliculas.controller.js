const { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovieById } = require('../models/Pelicula.model');


//OBTENER TODAS LAS PELICULAS
const obtenerPeliculas = async (req, res) => {
    try {
        const peliculas = await getAllMovies();
        res.status(200).json(peliculas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//OBTENER PELICULA POR ID
const obtenerPeliculaPorId = async (req, res) => {
    try {
        const pelicula = await getMovieById(req.params.id);
        if (!pelicula) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json(pelicula);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//CREAR NUEVA PELICULA
const crearPelicula = async (req, res) => {
    try {
        const newPelicula = await createMovie(req.body);
        res.status(201).json(newPelicula);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ACTUALIZAR PELICULA
const actualizarPelicula = async (req, res) => {
    try {
        const updatedRows = await updateMovie(req.params.id, req.body);
        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json({ message: 'Película actualizada', pelicula: updatedRows });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//ELIMINAR PELICULA
const eliminarPelicula = async (req, res) => {
    try {
        const deletedRows = await deleteMovieById(req.params.id);
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json({ message: 'Película eliminada con exito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerPeliculas,
    obtenerPeliculaPorId,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
};
