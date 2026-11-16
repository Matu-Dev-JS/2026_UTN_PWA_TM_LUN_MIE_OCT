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
const EspacioTrabajo = mongoose.model("espaciosTrabajo", espacioTrabajoSchema)
export default EspacioTrabajo