import mongoose from "mongoose";
import { ESPACIOS_TRABAJO_COLLECTION_NAME } from "./espacioTrabajo.model.js";

const canalSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    fk_id_espacio: {
        ref: ESPACIOS_TRABAJO_COLLECTION_NAME,
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})
export const CANAL_COLLECTION_NAME = "canal"

const Canal = mongoose.model(CANAL_COLLECTION_NAME, canalSchema)
export default Canal