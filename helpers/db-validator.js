
const {Usuario} = require('../models/Usuario.model')


const emailExiste = async (correo = '') => {
    //verificar si correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`el correo: ${correo}, ya esta registrado`)
    }
}


const existeUsuarioPorId = async (id) => {
    //verificar si existe usuario por ID
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`el id no existe ${id}`);
    }
}

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