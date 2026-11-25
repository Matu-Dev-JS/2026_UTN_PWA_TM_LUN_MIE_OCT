import express from 'express'
import { crearProducto, eliminarProductoPorId, obtenerProductoPorId } from '../repository/product.repository.js'

const products = []


const productRouter = express.Router()




productRouter.get(
    '/', 
    (request, response) => {

        /* 
        filtros: max_price, min_price, search_term
        */

        const {search_term, min_price, max_price} = request.query


        /* Si hay precio minimo, debe ser un numero positivo */
        if(min_price && (isNaN(min_price) || Number(min_price) < 0)){
            return response.send({
                ok: false,
                message: 'min_price debe ser un numero positivo'
            })
        }

        if(max_price && (isNaN(max_price) || Number(max_price) < 0 ) ){
            return response.send({
                ok: false,
                message: 'max_price debe ser un numero positivo'
            })
        }

        if(min_price && (Number(min_price) >= Number(max_price))){
            return response.send({
                ok: false,
                message: 'min_price debe ser un numero mayor a max_price'
            })
        }

        let filtered_products = [...products]

        //Si hay precio minimo aplico el filtro
        if(min_price){
            filtered_products = filtered_products.filter(product => product.price >= min_price)
        }

        if(max_price){
            filtered_products = filtered_products.filter(product => product.price <= max_price)
        }

        if(search_term){
            filtered_products = filtered_products.filter(product => product.title.toLowerCase().includes(search_term.trim().toLowerCase()))
        }


        
        response.send({
            ok: true,
            message: "Lista de productos obtenida",
            data: {
                products: filtered_products
            }
        })
    }
)

productRouter.post(
    '/', 
    async (request, response) => {
        const {title, price} = request.body
        if(!title || !price){
            return response.send({
                ok: false,
                message: 'title y price son valores requeridos'
            })
        }

        if(title.length < 2){
            return response.send({
                ok: false,
                message: "title debe ser un string de mas de 2 caracteres"
            })
        }

        if(isNaN(price) || price <= 0){
            return response.send({
                ok: false,
                message: "price debe ser un numero, positivo"
            })
        }


        await crearProducto(title, price)

    
        return response.send({
            ok:true,
            message: "producto creado exitosamente"
        })
    }
)

productRouter.get(
    '/:product_id',
    async (request, response) => {
        const {product_id} = request.params

        const product_detail = await obtenerProductoPorId(product_id)
        if(!product_detail){
            return response.send(
                {
                    ok: false,
                    message: "Producto por id no encontrado"
                }
            )
        }

        return response.send({
            ok: true,
            message: 'Producto por id obtenido exitosamente',
            data: {
                product_detail: product_detail
            }
        })
    }
)

productRouter.delete(
    '/:product_id',
    async ( request, response) => {
        const {product_id} = request.params


        const product_to_delete = await obtenerProductoPorId(product_id)

        if(!product_to_delete){
            return response.send({
                ok: false,
                message: 'Producto no encontrado'
            })
        }

        await eliminarProductoPorId(product_id)
        return response.send({
            ok:true,
            message:"Producto eliminado exitosamente"
        })

        
    }
)

productRouter.put(
    '/:product_id',
    (request, response) => {
        const {product_id} = request.params
        const {price, title} = request.body

        console.log('ID Buscado:',product_id)
        console.log('Productos registrados:', products)

        if(!product_id && product_id < 0){
            return response.send({
                ok: false,
                message: "product_id debe ser un numero positivo"
            })
        }

        if(price && (isNaN(price) || price <= 0)){
            return response.send({
                ok: false,
                message: 'El precio debe ser un numero positivo'
            })
        }


        if(title && (title.length < 2)){
            return response.send({
                ok: false,
                message: 'El titulo debe ser un texto de mas de 2 caracteres'
            })
        }

        for(let product of products){
            if(Number(product.id) === Number(product_id)){
                if(price){
                    product.price = price
                }

                if(title){
                    product.title = title
                }

                return response.send({
                    ok: true, 
                    message: "Producto actualizado exitosamente"
                })
            }
        }
        
        return response.send({
            ok: false,
            message: 'Producto no encontrado'
        })
    }
)





export default productRouter