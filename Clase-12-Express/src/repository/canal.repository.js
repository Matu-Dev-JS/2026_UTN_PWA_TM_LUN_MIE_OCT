import Canal from "../models/canal.model.js";

export async function crearCanal(titulo, descripcion, id_espacio){
    await Canal.create({
        titulo: titulo,
        descripcion: descripcion,
        fk_id_espacio: id_espacio
    })
}

export async function obtenerCanalPorId(canal_id){
    const result= await Canal
    .findById(canal_id)
    .populate("fk_id_espacio", "titulo")
    
    return result
}