/* 
Los repositories es una capa del servidor que tendra la resposabilidad de interactuar con la base de datos
*/

import Usuario from "../models/user.model.js";


export async function crearUsuario (nombre, email, password){
    await Usuario.create({
        nombre: nombre,
        email: email,
        password: password
    })
}

export async function buscarUsuarioPorId (usuario_id){
    return await Usuario.findById(usuario_id)
}

export async function eliminarUsuarioPorId(usuario_id){
    await Usuario.findByIdAndDelete(usuario_id)
}

export async function actualizarUsuarioPorId(usuario_id, nuevosDatos){
    return await Usuario.findByIdAndUpdate(
        usuario_id, 
        nuevosDatos, 
        { new: true } //Devuelve el dato actualizado
    )
}

export async function obtenerUsuarios(){
    return await Usuario.find()
}