import Membresia from "../models/membresias.model.js";



export async function crearMembresia (rol, id_usuario, id_espacio){
    await Membresia.create({
        rol: rol,
        fk_id_usuario: id_usuario,
        fk_id_espacio_trabajo: id_espacio
    })
}

export async function obtenerMembresiasPorEspacioTrabajo(id_espacio){

    /* 
    populate nos permite traer datos de otra coleccion
    Solo podemos aplicar populate a datos que el model hayan sido declarados como referencia. SI no son referencias NO se puede aplicar populate
    */

    const result = await Membresia
    .find({fk_id_espacio_trabajo: id_espacio})
    .populate('fk_id_usuario', 'nombre email')
    
    return result
}