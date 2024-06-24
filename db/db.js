const mysql = require('mysql2');
require('dotenv').config();

// conectando en mi BD local para prácticar
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "personas",
// });

// conectando a BD alwaysdata
// const connection = mysql.createConnection({
//     host: "mysql-colorete.alwaysdata.net",
//     user: "colorete_movie23",
//     password: "Grupo23!",
//     database: "colorete_movie_23",
// });

// conectando a BD alwaysdata con .env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
});

connection.connect((error) => {
    if (error) {
        return console.log(error);
    }

    console.log('Conectado a la BD');
});

module.exports = connection;