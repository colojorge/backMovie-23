const db = require('../db/db');
 
const index = (req, res) => {
    const sql = "SELECT * FROM actores";
 // rows: seria datos_personas
 // sql: es la busqueda, error: por si hay error, rows: son las filas de la tabla
    db.query(sql, (error, rows) => {
        if (error) {
            res.status(500).json({ error: "Intente mas tarde" });
        }

        res.json(rows);
    });
};


module.exports = {
    index,
};