const { connection } = require('../db/db');

const createMovie = async ({ titulo, año_estreno, genero_id, director, calificacion, nombre_actor }) => {

    let dbconnection;

    try {


        /*Al iniciar una transacción, es crucial asegurarse de que todas las operaciones dentro de esa transacción se realicen utilizando la misma conexión. Esto garantiza que la transacción sea atómica, es decir, que todas las operaciones se completen correctamente o ninguna de ellas se aplique.*/


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
    const query = `
        SELECT 
            p.id AS pelicula_id,
            p.titulo,
            p.año_estreno,
            p.genero_id,
            p.director,
            p.calificacion,
            GROUP_CONCAT(a.nombre_actor) AS actores
        FROM 
            peliculas p
            LEFT JOIN actores_peliculas ap ON p.id = ap.pelicula_id
            LEFT JOIN actores a ON ap.actor_id = a.id
        GROUP BY 
            p.id
    `;

    try {
        const [rows] = await connection.query(query);

        // Transformar el resultado para devolver un array de objetos con la película y los actores
        const peliculas = rows.map(row => ({
            id: row.pelicula_id,
            titulo: row.titulo,
            año_estreno: row.año_estreno,
            genero_id: row.genero_id,
            director: row.director,
            calificacion: row.calificacion,
            actores: row.actores ? row.actores.split(',') : []/*Convierte una cadena de nombres de actores separada por comas en un array de nombres o devuelve un array vacío si no hay actores.*/
        }));

        return peliculas;
    } catch (error) {
        throw new Error(error.message);
    }
};


const getMovieById = async (id) => {
    const queryPelicula = `
        SELECT p.*, GROUP_CONCAT(a.nombre_actor) AS actores
        FROM peliculas p
        LEFT JOIN actores_peliculas ap ON p.id = ap.pelicula_id
        LEFT JOIN actores a ON ap.actor_id = a.id
        WHERE p.id = ?
        GROUP BY p.id
    `;
    try {
        const [rows] = await connection.query(queryPelicula, [id]);
        if (rows.length === 0) {
            throw new Error('Película no encontrada');
        }
        const pelicula = rows[0];
        return {
            ...pelicula,
            actores: pelicula.actores ? pelicula.actores.split(',') : []
        };
    } catch (error) {
        throw new Error(error.message);
    }
};


const updateMovie = async (id, peliculaData) => {
    const { titulo, año_estreno, genero_id, director, calificacion, actores } = peliculaData;

    let dbconnection;

    try {
        // Validar que actores sea un array
        if (!Array.isArray(actores)) {
            throw new Error('actores debe ser un array');
        }

        dbconnection = await connection.getConnection();
        await dbconnection.beginTransaction();

        // 1. Actualizar la película
        const queryPelicula = `
            UPDATE peliculas
            SET titulo = ?, año_estreno = ?, genero_id = ?, director = ?, calificacion = ?
            WHERE id = ?
        `;
        const valuesPelicula = [titulo, año_estreno, genero_id, director, calificacion, id];
        await dbconnection.query(queryPelicula, valuesPelicula);

        // 2. Eliminar todas las asociaciones actuales de actores con la película
        const queryDeleteActoresPeliculas = `DELETE FROM actores_peliculas WHERE pelicula_id = ?`;
        await dbconnection.query(queryDeleteActoresPeliculas, [id]);

        // 3. Volver a asociar actores con la película
        for (const nombreActor of actores) {
            let idActor;
            const queryActor = `SELECT id FROM actores WHERE nombre_actor = ?`;
            const [resultActor] = await dbconnection.query(queryActor, [nombreActor]);

            if (resultActor.length > 0) {
                idActor = resultActor[0].id;
            } else {
                const queryInsertActor = `INSERT INTO actores (nombre_actor) VALUES (?)`;
                const [resultInsertActor] = await dbconnection.query(queryInsertActor, [nombreActor]);
                idActor = resultInsertActor.insertId;
            }

            const queryActoresPeliculas = `INSERT INTO actores_peliculas (pelicula_id, actor_id) VALUES (?, ?)`;
            await dbconnection.query(queryActoresPeliculas, [id, idActor]);
        }

        await dbconnection.commit();

        return { id, titulo, año_estreno, genero_id, director, calificacion, actores };

    } catch (error) {
        if (dbconnection) await dbconnection.rollback();
        throw new Error(error.message);
    } finally {
        if (dbconnection) dbconnection.release();
    }
};


const deleteMovieById = async (id) => {
    let dbconnection;

    try {
        dbconnection = await connection.getConnection();
        await dbconnection.beginTransaction();

        // Eliminar todas las asociaciones de actores con la película
        const queryDeleteActoresPeliculas = `DELETE FROM actores_peliculas WHERE pelicula_id = ?`;
        await dbconnection.query(queryDeleteActoresPeliculas, [id]);

        // Luego, eliminar la película
        const queryDeletePelicula = `DELETE FROM peliculas WHERE id = ?`;
        const [result] = await dbconnection.query(queryDeletePelicula, [id]);

        await dbconnection.commit();
        return result.affectedRows;

    } catch (error) {
        if (dbconnection) await dbconnection.rollback();
        throw new Error(error.message);

    } finally {
        if (dbconnection) dbconnection.release();
    }
};


module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovieById
};
