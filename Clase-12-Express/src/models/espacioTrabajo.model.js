import mongoose from "mongoose"

const espacioTrabajoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
})

export const ESPACIOS_TRABAJO_COLLECTION_NAME = "espaciosTrabajo"

const EspacioTrabajo = mongoose.model(ESPACIOS_TRABAJO_COLLECTION_NAME, espacioTrabajoSchema)
export default EspacioTrabajo