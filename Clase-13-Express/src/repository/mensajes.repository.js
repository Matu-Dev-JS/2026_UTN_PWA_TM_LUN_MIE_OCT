import Mensaje from "../models/mensajes.model.js";


export async function crearMensaje(contenido, id_canal, id_miembro) {
    const nuevoMensaje = await Mensaje.create({
        contenido: contenido,
        fk_id_canal: id_canal,
        fk_id_membresia: id_miembro
    });
    return nuevoMensaje;
}
export async function obtenerMensajesPorCanal(id_canal) {
    const resultado = await Mensaje.find({ fk_id_canal: id_canal })
        .populate("fk_id_membresia", "nombre email");

    return resultado;

    
}
export async function actualizarMensajePorId(mensaje_id, datos_actualizados) {
    const resultado = await Mensaje.findByIdAndUpdate(
        mensaje_id,
        datos_actualizados,
        { new: true }
    );
    return resultado;
}

export async function obtenerMensajePorId(mensaje_id) {

    return await Mensaje.findById(mensaje_id)
        .populate("fk_id_canal", "titulo")
        .populate({
            path: "fk_id_membresia",
            select: "rol fk_id_usuario",
            populate: { path: "fk_id_usuario", select: "nombre email"}
        })
}

export async function eliminarMensajePorId(mensaje_id) {
    const resultado = await Mensaje.findByIdAndDelete(mensaje_id);
    return resultado;
}