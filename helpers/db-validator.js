const { connection } = require('../db/db');

const { getMovieById } = require('../models/Pelicula.model');
const { getUserByEmail, getUserById } = require('../models/Usuario.model');


//VERIFICACION CORREO_ELECTRONICO EXISTE
const emailExiste = async (correo_electronico = '') => {
    const existeEmail = await getUserByEmail(correo_electronico);
    if (existeEmail) {
        throw new Error(`El correo: ${correo_electronico}, ya está registrado`);
    }
};


//VERIFICACION DE USUARIO POR ID
const existeUsuarioPorId = async (id) => {
    const existeUsuario = await getUserById(id);
    if (!existeUsuario) {
        throw new Error(`El ID no existe: ${id}`);
    }
};



//VERIFICACION SI EXISTE LA PELICULA
const existePelicula = async (req, res, next) => {
    const { titulo } = req.body; 

    let dbconnection;

    try {
        // Obtener la conexion
        dbconnection = await connection.getConnection();

        // Consulta para verificar la existencia de la película por título
        const query = `SELECT * FROM peliculas WHERE titulo = ?`;
        const [result] = await dbconnection.query(query, [titulo]);

        // Si la consulta devuelve resultados, la película ya existe
        if (result.length > 0) {
            return res.status(400).json({ message: `Ya existe una película con el título: ${titulo}` });
        }

        // Si no hay resultados, la película no existe
        next(); // Continúa con el siguiente middleware 

    } catch (error) {
        console.error('Error al verificar la existencia de la película:', error);
        return res.status(500).json({ message: `Error al verificar la existencia de la película: ${error.message}` });

    } finally {
        // Liberar la conexión
        if (dbconnection) dbconnection.release();
    }
};



// VERIFICACION PELICULA POR ID
const existePeliculaPorId = async (id) => {
    const existePelicula = await getMovieById(id);
    if (!existePelicula) {
        throw new Error(`El ID no existe: ${id}`);
    }
};







module.exports = {
    
    emailExiste,
    existeUsuarioPorId,
    existePeliculaPorId,
    existePelicula
    
    
}