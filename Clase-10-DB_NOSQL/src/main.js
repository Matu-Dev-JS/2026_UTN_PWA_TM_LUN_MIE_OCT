import mongoose from "mongoose";
import Usuario from "./models/user.model.js";
import connectMongoDB from "./config/mongoDB.config.js";
import { actualizarUsuarioPorId, buscarUsuarioPorId, eliminarUsuarioPorId, obtenerUsuarios } from "./repository/user.repository.js";
import { actualizarEspacioPorId, buscarEspacioPorId, crearEspacio, eliminarEspacioPorId, obtenerEspacios } from "./repository/espacioTrabajo.repository.js";
import { crearMembresia, obtenerMembresiasPorEspacioTrabajo } from "./repository/membresia.repository.js";
import { crearCanal, obtenerCanalPorId } from "./repository/canal.repository.js";




connectMongoDB()




async function probar (){
    const result = await obtenerCanalPorId('6afb113499ea7a3c88fdd27a')
    console.log(result)


}

probar()

/* 
HECHO Crear un nuevo Model de mongoose llamado EspacioTrabajo que tendra las propiedades
    - titulo : String
    - descripcion : String
    - fecha_creacion : Date

Una vez creado el modelo, crear las funciones CRUD (create, read, update, delete) para los espacios de trabajo en 
espaciosTrabajo.repository.js
    


AHORA
Crear un nuevo Model de mongoose llamada Canal que tendra las propiedades
    - titulo
    - descripcion
    - fecha_creacion
    - fk_id_espacio (el espacio de trabajo al que se relaciona el canal)

Crear el canal.repository.js donde estara la funcion:
    crearCanal(titulo, descipcion, id_espacio)
    obtenerCanalPorId(canal_id) traera en su respuesta el nombre del espacio de trabajo asociado (PROTIP: Aca es donde va el populate)
    */