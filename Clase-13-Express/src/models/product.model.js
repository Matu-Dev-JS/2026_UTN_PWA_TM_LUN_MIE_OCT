/* 
Cada producto debe tener:
    title: string requerido
    price: number requerido
*/

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        requird: true
    },
    price: {
        type: Number,
        required: true
    }
})

export const PRODUCTOS_COLLECTION_NAME = 'productos'

const Producto = mongoose.model(PRODUCTOS_COLLECTION_NAME, productSchema)

export default Producto