"use strict";

var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var pelicuasRoutes = require("./routes");
app.use(express.json());

// Ruta estática y pública 
app.use(express["static"]('public'));

// Rutas de la aplicación 
app.use(pelicuasRoutes);

// Ruta comodín, en caso de poner alguna ruta invalida cae aca.
app.get('*', function (req, res) {
  var indexPath = path.join(__dirname + "../../public/index.html");
  res.sendFile(indexPath);
});
app.listen(PORT, function () {
  console.log("http://localhost:".concat(PORT));
});