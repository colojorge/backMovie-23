"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var db = require('../db/db');
var NewGenero = function NewGenero(req, res) {
  var nombre_genero = req.body.nombre_genero;

  // hago la consulta a la BD
  var sql = "INSERT INTO generos (nombre_genero) VALUES (?)";
  db.query(sql, [nombre_genero], function (error, result) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    // genero variable para mostrar datos del genero agregado con su id
    var nuevoGenero = _objectSpread(_objectSpread({}, req.body), {}, {
      id: result.insertId
    });
    res.json(nuevoGenero);
  });
};
var generos = function generos(req, res) {
  var sql = "SELECT * FROM generos";
  db.query(sql, function (error, rows) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    res.json(rows);
  });
};
var updateGenero = function updateGenero(req, res) {
  var id = req.params.id;
  var nombre_genero = req.body.nombre_genero;
  // consulta update(PUT), importante que este el WHERE id
  // nombre_genero = ?: quiere decir cuando sea igual a algo (algo: viene del fron ?: por los hackers)
  var sql = "UPDATE generos SET nombre_genero = ? WHERE id = ?";
  db.query(sql, [nombre_genero, id], function (error, result) {
    if (error) {
      return res.status(500).json({
        error: "Intente mas tarde"
      });
    }
    // si el result no tuvo ningun cambio(affectedRows: no cambios en la fila de la tabla)
    if (result.affectedRows == 0) {
      return res.status(404).json({
        error: "No existe el género"
      });
    }

    // si se produce el update devuelvo los cambios consola postman
    var update = _objectSpread(_objectSpread({}, req.body), req.params);
    res.json(update);
  });
};
module.exports = {
  NewGenero: NewGenero,
  generos: generos,
  updateGenero: updateGenero
};