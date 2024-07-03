const db = require('../db/db');

const lista = (req, res) => {
    const sql = "SELECT * FROM preferencia";

    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        res.json(rows);
    });
};

const eliminar = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM preferencia WHERE preferencia_id = ?";
    db.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        if (result.affectedRows == 0) { // si el id buscado en la barra de navegacion no existe, 404
            return res.status(404).json({ error: "No existe la prefencia" });
        }
         // devolvemos solo que se elimino
        res.json({ mensaje: `Preferencia con el id: ${id} borrado` });
    });
};


const insertar = (req, res) => {
    // console.log(req.file);
    const { id_pelicula, id_usuario, comentario } = req.body;
  
    const sql =
      "INSERT INTO preferencia (id_pelicula, id_usuario, comentario) VALUES (?, ?, ? )";
    db.query(sql, [id_pelicula, id_usuario, comentario ], (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Intente mas tarde" });
      }
  
      const producto = { ...req.body, id: result.insertId };
  
      res.json(producto);
    });
  };


module.exports = {
    lista,
    eliminar,
    insertar
};
