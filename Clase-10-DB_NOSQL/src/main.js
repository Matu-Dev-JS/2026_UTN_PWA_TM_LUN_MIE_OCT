import mongoose from "mongoose";
import Usuario from "./models/user.model.js";
import connectMongoDB from "./config/mongoDB.config.js";
import { actualizarUsuarioPorId, buscarUsuarioPorId, eliminarUsuarioPorId, obtenerUsuarios } from "./repository/user.repository.js";
import { actualizarEspacioPorId, buscarEspacioPorId, crearEspacio, eliminarEspacioPorId, obtenerEspacios } from "./repository/espacioTrabajo.repository.js";




connectMongoDB()




async function probar (){

   //actualizarEspacioPorId('6afb015915f3242d2218086d', {titulo: 'test 2'})

   //const result = await obtenerEspacios()

    //const result = await buscarEspacioPorId('6afb015915f3242d2218086d')

   //eliminarEspacioPorId('6afb015915f3242d2218086d')

   //console.log(result)
}

probar()

/* 
Crear un nuevo Model de mongoose llamado EspacioTrabajo que tendra las propiedades
    - titulo : String
    - descripcion : String
    - fecha_creacion : Date

Una vez creado el modelo, crear las funciones CRUD (create, read, update, delete) para los espacios de trabajo en 
espaciosTrabajo.repository.js
    */