import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
})

const Usuario = mongoose.model("usuarios", userSchema)

export default Usuario