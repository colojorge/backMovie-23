require('dotenv').config();
const Server = require('./models/server');



const server = new Server();

server.listen();






/*const express = require('express');
const app = express();

const path = require('path');

app.use(express.json());

app.use('/actores', require("./routes/actores.router"));
app.use('/generos', require("./routes/generos.router"));
app.use('/comentarios', require("./routes/comentarios.router"));

app.get('/', (req, res)=>{
    res.send('Proyecto integrador Grupo 23');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});*/