import mongoose from "mongoose";
import Usuario from "./models/user.model.js";
import connectMongoDB from "./config/mongoDB.config.js";
import { actualizarUsuarioPorId, buscarUsuarioPorId, eliminarUsuarioPorId, obtenerUsuarios } from "./repository/user.repository.js";
import { crearEspacio } from "./repository/espacioTrabajo.repository.js";




connectMongoDB()




async function probar (){

    crearEspacio('test', 'test')
    //const result = await buscarUsuarioPorId('6af480703ec606312417019e')

    //const result = await eliminarUsuarioPorId('6af480703ec606312417019e')

    /*  const result = await actualizarUsuarioPorId(
        '6af47ee7aa29bf23da565322',
        {
            nombre: 'pepesito'
        }
    ) */

    //const result = await obtenerUsuarios()
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