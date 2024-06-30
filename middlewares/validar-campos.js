const {validationResult} = require('express-validator');

//validationResult(req) verifica los datos de entrada de la solicitud req en función de las reglas de validación que se hayan especificado(se especifican en la ruta) utilizando express-validator.

const validarCampos = (req,res,next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    //errors: Es un array que contiene objetos individuales, cada uno representando un error de validación detectado. Si ese array no esta vacio devuelve un status 400, si todo esta bien next()
    next();
}

module.exports ={
    validarCampos
}









