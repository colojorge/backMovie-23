"use strict";

var db = require('../db/db');
var resenias = function resenias(req, res) {
  var sql = "SELECT * FROM comentarios";
  db.query(sql, function (error, rows) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    res.json(rows);
  });
};
var destroy = function destroy(req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM comentarios WHERE id = ?";
  db.query(sql, [id], function (error, result) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    if (result.affectedRows == 0) {
      // si el id buscado en la barra de navegacion no existe, 404
      return res.status(404).json({
        error: "No existe la reseña"
      });
    }
    // devolvemos solo que se elimino
    res.json({
      mensaje: "Rese\xF1a con el id: ".concat(id, " borrado")
    });
  });
};
module.exports = {
  resenias: resenias,
  destroy: destroy
};