require('dotenv').config();
const mysql = require('mysql2/promise');

/*Un pool de conexiones es una técnica utilizada para manejar conexiones a una base de datos de manera eficiente, especialmente en entornos donde múltiples solicitudes pueden necesitar acceder a la base de datos simultáneamente.*/

// Crear un pool de conexiones
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cac_movies_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//probar la conexión
const testConnection = async () => {
    try {
        const conn = await connection.getConnection();
        console.log('Conectado a la base de datos');
        conn.release();
    } catch (err) {
        console.error('Error al conectarse a la base de datos:', err);
    }
};

// Ejecutar la prueba de conexión
testConnection();

module.exports = {
    connection
};



