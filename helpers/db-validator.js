
const { getUserByEmail, getUserById } = require('../models/Usuario.model');

const emailExiste = async (correo_electronico = '') => {
    const existeEmail = await getUserByEmail(correo_electronico);
    if (existeEmail) {
        throw new Error(`El correo: ${correo_electronico}, ya está registrado`);
    }
};

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await getUserById(id);
    if (!existeUsuario) {
        throw new Error(`El ID no existe: ${id}`);
    }
};



/*const existeCategoriaPorId = async (id) => {
    //verificar si id existe
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`el id no existe ${id}`);
    }
}

const existeProductoPorId = async (id) => {
    //verificar si id existe
    const existeProducto = await Producto.findById(id);
    if (!existeProducto) {
        throw new Error(`el id no existe ${id}`);
    }
}

// Validar las colecciones permitidas
const coleccionesPermitidas = (coleccion = '', colecciones = []) =>{

    const incluida = colecciones.includes(coleccion);
    if(!incluida){
        throw new Error(`La coleccion ${coleccion} no es permitida, ${colecciones}`);
    }

    return true;

}*/

module.exports = {
    
    emailExiste,
    existeUsuarioPorId,
    
    
}