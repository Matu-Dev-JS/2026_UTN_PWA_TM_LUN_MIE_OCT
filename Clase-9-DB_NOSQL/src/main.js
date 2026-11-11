import mongoose from "mongoose";
import Usuario from "./models/user.model.js";

const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = '2026_UTN_PWA_TM_LUN_MIE'

async function connectMongoDB (){
    try{
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log("Conexion exitosa!")
    }
    catch(error){
        console.log("Error al conectar MongoDB:", error.message)
    }
    
}



connectMongoDB()

function crearUsuario (nombre, email, password){
    Usuario.create({
        nombre: nombre,
        email: email,
        password: password
    })
}

crearUsuario('maria', 'maria@gmail', 'maria123')