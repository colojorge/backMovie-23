const { connection } = require('../db/db');

const createMovie = async ({ titulo, año_estreno, genero_id, director, calificacion, nombre_actor }) => {

    let dbconnection;
    
    try {
        // Validar que todos los campos requeridos estén presentes
        /*if (!titulo || !año_estreno || !genero_id || !director || !calificacion || !Array.isArray(nombre_actor) || nombre_actor.length === 0) {
            throw new Error('Todos los campos son requeridos y nombre_actor debe ser un array no vacío');
        }*/

        // Obtener una conexión del pool
        dbconnection = await connection.getConnection();

        /* TRANSACCION => secuencia de operaciones que se ejecutan como una unidad indivisible. Todas las operaciones se completan exitosamente o ninguna se realiza en absoluto.*/

        // Comenzar la transacción
        await dbconnection.beginTransaction();

        // 1. INSERTAR LA PELICULA Y OBTENER EL ID INSERTADO

        const queryPelicula = `INSERT INTO peliculas (titulo, año_estreno, genero_id, director, calificacion) VALUES (?, ?, ?, ?, ?)`;
        const valuesPelicula = [titulo, año_estreno, genero_id, director, calificacion];
        const [resultPelicula] = await dbconnection.query(queryPelicula, valuesPelicula);
        const idPelicula = resultPelicula.insertId;

        // 2. PROCESAR CADA ACTOR

        for (const nombreActor of nombre_actor) {
            let idActor;
            const queryActor = `SELECT id FROM actores WHERE nombre_actor = ?`;
            const [resultActor] = await dbconnection.query(queryActor, [nombreActor]);
            
            if (resultActor.length > 0) {
                // El actor ya existe, obtenemos su ID
                idActor = resultActor[0].id;
            } else {
                // El actor no existe, lo creamos y obtenemos su ID
                const queryInsertActor = `INSERT INTO actores (nombre_actor) VALUES (?)`;
                const [resultInsertActor] = await dbconnection.query(queryInsertActor, [nombreActor]);
                idActor = resultInsertActor.insertId;
            }

            // 3. ASOCIAR EL ACTOR CON LA PELICULA EN LA TABLA ACTORES_PELICULAS

            const queryActoresPeliculas = `INSERT INTO actores_peliculas (pelicula_id, actor_id) VALUES (?, ?)`;
            const valuesActoresPeliculas = [idPelicula, idActor];
            await dbconnection.query(queryActoresPeliculas, valuesActoresPeliculas);
        }

        // Commit de la transacción
        await dbconnection.commit();

        return {
            id: idPelicula,
            titulo,
            año_estreno,
            genero_id,
            director,
            calificacion,
            nombre_actor
        };
    } catch (error) {
        
        /*Rollback: Es una operación que deshace los cambios realizados por una transacción que no se completó correctamente. Cuando se realiza un rollback, se restaura el estado de la base de datos al punto anterior al inicio de la transacción.*/

        // Rollback en caso de error
        if (dbconnection) await dbconnection.rollback();
        console.error('Error detallado:', error);
        throw new Error(`Error al crear la película: ${error.message}`);
    } finally {
        // Liberar la conexión
        if (dbconnection) dbconnection.release();
    }
};


const getAllMovies = async () => {
    const query = `SELECT * FROM peliculas`;

    try {
        const [rows] = await connection.query(query);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getMovieById = async (id) => {
    const query = `SELECT * FROM peliculas WHERE id = ?`;
    try {
        const [rows] = await connection.query(query, [id]);
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateMovie = async (id, peliculaData) => {
    const { titulo, año_estreno, genero_id, director, calificacion } = peliculaData;
    const query = `
        UPDATE peliculas
        SET titulo = ?, año_estreno = ?, genero_id = ?, director = ?, calificacion = ?
        WHERE id = ?
    `;
    const values = [titulo, año_estreno, genero_id, director, calificacion, id];

    try {
        const [result] = await connection.query(query, values);
        return result.affectedRows;
        
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteMovieById = async (id) => {
    const query = `DELETE FROM peliculas WHERE id = ?`;

    try {
        const [result] = await connection.query(query, [id]);
        return result.affectedRows;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovieById
};
