const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

const pelicuasRoutes = require("./routes")

app.use(express.json());

// Ruta estática y pública 
app.use( express.static('public') );

// Rutas de la aplicación 
app.use(pelicuasRoutes);

// Ruta comodín, en caso de poner alguna ruta invalida cae aca.
app.get('*',(req,res) => {
    const indexPath = path.join( __dirname + `../../public/index.html` );
    res.sendFile(indexPath);
})

app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});