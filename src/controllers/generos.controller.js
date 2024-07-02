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

const updateGenero = (req, res) => {
    const { id } = req.params;
    const { nombre_genero } = req.body;
    // consulta update(PUT), importante que este el WHERE id
    // nombre_genero = ?: quiere decir cuando sea igual a algo (algo: viene del fron ?: por los hackers)
    const sql = "UPDATE generos SET nombre_genero = ? WHERE id = ?";
    db.query(sql, [nombre_genero, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde" });
        }
        // si el result no tuvo ningun cambio(affectedRows: no cambios en la fila de la tabla)
        if (result.affectedRows == 0) {
            return res.status(404).json({ error: "No existe el género" })
        }

        // si se produce el update devuelvo los cambios consola postman
        const update = { ...req.body, ...req.params };

        res.json(update);
    });
};


module.exports = {
    NewGenero,
    generos,
    updateGenero,
};