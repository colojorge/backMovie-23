const express = require('express');
const app = express();

const path = require('path');

app.use(express.json());
const pelicuasRoutes = require("./routes")

app.use(pelicuasRoutes);

app.use('/', (req, res)=>{
    res.send('Proyecto integrador Grupo 23');
});

// comentarios nuevos
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});