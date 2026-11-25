

/* 
Para que sirve/Que responsabilidad tiene REPOSITORY?
interactuar con la base de datos

Desarrollar la funcion:
- crearProducto(title, price)
- obtenerProductoPorId(product_id)
- eliminarProductoPorId(product_id)
- actualizarProductoPorId(product_id, updated_product)
*/

import Producto from "../models/product.model.js";

export async function crearProducto(title, price){
    await Producto.create({
        title: title,
        price: price
    })
}

export async function obtenerProductoPorId(product_id) {
    const producto = await Producto.findById(product_id);
    return producto;
}

export async function eliminarProductoPorId(product_id) {
    return await Producto.findByIdAndDelete(product_id)
}

export async function actualizarProductoPorId(product_id, updated_product) {
    const productoActualizado = await Producto.findByIdAndUpdate(
        product_id,
        updated_product,
        { returnDocument: 'after' }
    )
    return productoActualizado
}