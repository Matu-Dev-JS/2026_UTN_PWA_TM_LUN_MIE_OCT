import mongoose from "mongoose";
import { USUARIOS_COLLECTION_NAME } from "./user.model.js";
import { ESPACIOS_TRABAJO_COLLECTION_NAME } from "./espacioTrabajo.model.js";


const membresiaSchema = new mongoose.Schema({
    rol: {
        type: String,
        enum: ['usuario', 'administrador', 'dueño'],
        required: true,
        default: 'usuario'
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    fk_id_usuario: {
        ref: USUARIOS_COLLECTION_NAME,
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    fk_id_espacio_trabajo: {
        ref: ESPACIOS_TRABAJO_COLLECTION_NAME,
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

export const MEMBRESIAS_COLLECTION_NAME = 'membresias'

const Membresia = mongoose.model(MEMBRESIAS_COLLECTION_NAME, membresiaSchema)

export default Membresia