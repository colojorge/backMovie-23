const express = require("express");
const cors = require('cors');


const { connection } = require('../db/db');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            auth:'/auth',
            usuarios: '/usuarios',
            
            /*movies: '/movies',*/

        }

        //Conectar a la base de datos
        this.conectarDB();

        //Middleware
        this.middlewares();


        //rutas de mi app
        this.routes();
    }

    conectarDB() {

        this.connection = connection;
    }

    middlewares() {
        //cors
        this.app.use(cors())

        // Lectura y pasrseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));

        //Fileupload - carga de archivos
        /*this.app.use(fileUpload({
            useTempFiles:true,
            tempFileDir:'/tmp/',
            createParentPath: true
        }));*/
    }
    /*Los endpoints de API suelen aceptar solicitudes HTTP (por ejemplo, GET, POST, PUT, DELETE) y devuelven respuestas en un formato específico, como JSON o XML.
    endpoint es cualquier dispositivo o nodo que pueda enviar o recibir datos a través de una red*/

    routes() {

        //this.app.use(this.paths.usuarios, require('../Routes/usuarios'));
        //this.app.use(this.paths.movies, require('../Routes/movies.route'));
        this.app.use(this.paths.auth, require('../routes/auth.router'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios.router'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        });
    }


}

module.exports = Server;















