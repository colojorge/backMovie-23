"use strict";

var express = require('express');
var app = express();
var path = require('path');
app.use(express.json());
var actoresRoutes = require("./routes");
app.use(actoresRoutes);
// app.use('api/generos', require("./routes/generos.router"));
// app.use('/comentarios', require("./routes/comentarios.router"));

app.use('/', function (req, res) {
  res.send('Proyecto integrador Grupo 23');
});

// comentarios nuevos
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("http://localhost:".concat(PORT));
});