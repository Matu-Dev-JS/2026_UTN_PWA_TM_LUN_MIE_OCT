import EspacioTrabajo from "../models/espacioTrabajo.model.js";

export async function crearEspacio (titulo, descripcion){
    await EspacioTrabajo.create({
        titulo: titulo,
        descripcion: descripcion
    })
}

export async function actualizarEspacioPorId (espacio_id, datos_actualizados){
    return await EspacioTrabajo.findByIdAndUpdate(
        espacio_id,
        datos_actualizados,
        { new: true}) //Devuelve el dato actualizado
}

export async function eliminarEspacioPorId (espacio_id){
    await EspacioTrabajo.findByIdAndDelete(espacio_id)
}

export async function buscarEspacioPorId(espacio_id){
    return await EspacioTrabajo.findById(espacio_id)
}

export async function obtenerEspacios(){
    return await EspacioTrabajo.find()
}