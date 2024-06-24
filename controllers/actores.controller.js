const db = require('../db/db');
 
const index = (req, res) => {
    const sql = "SELECT * FROM actores";
 // rows: seria los datos actores
 // sql: es la busqueda, error: por si hay error, rows: son las filas de la tabla
    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        res.json(rows);
    });
};

// GET con identificador ID de la tabla actores
const actorID = (req, res) => {
    const { id } = req.params; // destructuramos los id de la tabla

    const sql = "SELECT * FROM actores WHERE id = ?"; // usamos ? para que node se encarde de limpiar lo que se ingrese por la barra de navegacion, anti-hackers
    db.query(sql, [id], (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        if (rows.length == 0) { // si el id buscado en la barra de navegacion no existe, 404
            return res.status(404).json({ error: "No existe el actor" });
        }

        res.json(rows[0]); // [0] nos devuelve un solo objeto del arreglo, ya que actores trae varios objetos
    });
};




module.exports = {
    index,
    actorID,
};