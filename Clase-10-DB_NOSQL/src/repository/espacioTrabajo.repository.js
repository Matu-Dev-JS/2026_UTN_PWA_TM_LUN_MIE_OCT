import EspacioTrabajo from "../models/espacioTrabajo.model.js";

export async function crearEspacio (titulo, descripcion){
    await EspacioTrabajo.create({
        titulo: titulo,
        descripcion: descripcion
    })
}

