"use strict";

var db = require('../db/db');
var index = function index(req, res) {
  var sql = "SELECT * FROM actores";
  // rows: seria los datos actores
  // sql: es la busqueda, error: por si hay error, rows: son las filas de la tabla
  db.query(sql, function (error, rows) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    res.json(rows);
  });
};

// GET con identificador ID de la tabla actores
var actorID = function actorID(req, res) {
  var id = req.params.id; // destructuramos los id de la tabla

  var sql = "SELECT * FROM actores WHERE id = ?"; // usamos ? para que node se encarde de limpiar lo que se ingrese por la barra de navegacion, anti-hackers
  db.query(sql, [id], function (error, rows) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    if (rows.length == 0) {
      // si el id buscado en la barra de navegacion no existe, 404
      return res.status(404).json({
        error: "No existe el actor"
      });
    }
    res.json(rows[0]); // [0] nos devuelve un solo objeto del arreglo, ya que actores trae varios objetos
  });
};
module.exports = {
  index: index,
  actorID: actorID
};