import mongoose from "mongoose";
import Usuario from "./models/user.model.js";
import connectMongoDB from "./config/mongoDB.config.js";
import { actualizarUsuarioPorId, buscarUsuarioPorId, eliminarUsuarioPorId, obtenerUsuarios } from "./repository/user.repository.js";
import { actualizarEspacioPorId, buscarEspacioPorId, crearEspacio, eliminarEspacioPorId, obtenerEspacios } from "./repository/espacioTrabajo.repository.js";
import { crearMembresia, obtenerMembresiasPorEspacioTrabajo } from "./repository/membresia.repository.js";




connectMongoDB()




async function probar (){

   //crearMembresia('dueño', '6af47ee7aa29bf23da565322', '6afb0955a2556b0aff4e0d74')
    const result = await obtenerMembresiasPorEspacioTrabajo('6afb0955a2556b0aff4e0d74')
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