require('dotenv').config();
const mysql = require('mysql2/promise');

// Crear un pool de conexiones, pero lo llamaremos 'connection'
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cac_movies_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Función para probar la conexión
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



/*require('dotenv').config();
const mysql = require('mysql2');

// conectando a BD alwaysdata con .env
/*const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
});*/
/*const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cac_movies_db'
});

connection.connect((err) => {
    if (err) {
        console.log('error al conectarse a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos')
})

module.exports = {
    connection,
}


/*connection.connect((error) => {
    if (error) {
        return console.log(error);
    }

    console.log('Conectado a la BD');
});

module.exports = connection;*/