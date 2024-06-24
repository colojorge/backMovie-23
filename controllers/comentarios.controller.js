const db = require('../db/db');

const resenias = (req, res) => {
    const sql = "SELECT * FROM comentarios";

    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        res.json(rows);
    });
};

const destroy = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM comentarios WHERE id = ?";
    db.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        if (result.affectedRows == 0) { // si el id buscado en la barra de navegacion no existe, 404
            return res.status(404).json({ error: "No existe la reseña" });
        }
         // devolvemos solo que se elimino
        res.json({ mensaje: `Reseña con el id: ${id} borrado` });
    });
};


module.exports = {
    resenias,
    destroy,
};
