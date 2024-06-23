const db = require('../db/db');

const NewGenero = (req, res) => {
    const { nombre_genero } = req.body;

    // hago la consulta a la BD
    const sql = "INSERT INTO generos (nombre_genero) VALUES (?)";
    db.query(sql, [nombre_genero], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }
        // genero variable para mostrar datos del genero agregado con su id
        const nuevoGenero = { ...req.body, id: result.insertId };

        res.json(nuevoGenero);
    });
};

const generos = (req,res) => {

    const sql = "SELECT * FROM generos";
    db.query(sql, (error, rows) => {
        
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }

        res.json(rows);
    });
};



module.exports = {
    NewGenero,
    generos,
};