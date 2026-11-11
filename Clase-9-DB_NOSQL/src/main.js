import mongoose from "mongoose";
import Usuario from "./models/user.model.js";
import connectMongoDB from "./config/mongoDB.config.js";




connectMongoDB()

function crearUsuario (nombre, email, password){
    Usuario.create({
        nombre: nombre,
        email: email,
        password: password
    })
}

//crearUsuario('maria', 'maria@gmail', 'maria123')