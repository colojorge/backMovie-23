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
            peliculas:'/peliculas',
            comentarios:'/comentarios'
            
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
        
    }    

    routes() {

        this.app.use(this.paths.peliculas, require('../routes/peliculas.router'));
        this.app.use(this.paths.auth, require('../routes/auth.router'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios.router'));
        this.app.use(this.paths.comentarios, require('../routes/comentarios.router'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        });
    }


}

module.exports = Server;















