import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import statusRouter from "./routes/status.router.js";


connectMongoDB()


/* Crear nuestra primera API en express */


const PORT = 8080

//Se crea la api de express
const app = express()

//Middleware que permite que nuestro servidor de express PUEDA RECIBIR JSON
app.use(express.json())



app.use('/api/status', statusRouter)

/* 
Crear el product router sobre el prefijo/ruta
/api/products y que los endpoints se migren del main.js a product.router.js

Checkear que funcione igual a como funciona ahora
*/



app.get(
    '/api/products', 
    (request, response) => {

        /* 
        filtros: max_price, min_price, search_term
        */

        const {search_term, min_price, max_price} = request.query


        /* Si hay precio minimo, debe ser un numero positivo */
        if(min_price && (isNaN(min_price) || min_price < 0)){
            return response.send({
                ok: false,
                message: 'min_price debe ser un numero positivo'
            })
        }

        if(max_price && (isNaN(max_price) || max_price < 0 ) ){
            return response.send({
                ok: false,
                message: 'max_price debe ser un numero positivo'
            })
        }

        if(min_price && min_price >= max_price){
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


/* 
POST /products
body: {title, price} 
*/

app.post(
    '/api/products', 
    (request, response) => {
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

        //Agrego el producto a la lista interna
        products.push({
            title: title,
            price: price,
            id: products.length + 1
        })

    
        return response.send({
            ok:true,
            message: "producto creado exitosamente"
        })
    }
)


app.get(
    '/api/products/:product_id',
    (request, response) => {
        const {product_id} = request.params

        console.log('ID Buscado:',product_id)
        console.log('Productos registrados:', products)

        if(!product_id && product_id < 0){
            return response.send({
                ok: false,
                message: "product_id debe ser un numero positivo"
            })
        }


        for(const product of products){
            if(Number(product.id) === Number(product_id)){
                return response.send(
                    {
                        ok: true,
                        message: 'Producto por id obtenido correctamente',
                        data: {
                            product_detail: product
                        }
                    }
                )
            }
        }

        return response.send(
            {
                ok: false,
                message: "Producto por id no encontrado"
            }
        )
    }
)


app.delete(
    '/api/products/:product_id',
    (request, response) => {
        const {product_id} = request.params

        console.log('ID Buscado:',product_id)
        console.log('Productos registrados:', products)

        if(!product_id && product_id < 0){
            return response.send({
                ok: false,
                message: "product_id debe ser un numero positivo"
            })
        }

        for(let product of products){
            if(Number(product.id) === Number(product_id)){
                const product_index = products.indexOf(product)
                products.splice(product_index, 1)

                return response.send({
                    ok: true,
                    message: "Producto eliminado exitosamente"
                })
            }
        }


        return response.send({
            ok: false,
            message: 'Producto no encontrado'
        })
    }
)


/* 
PUT /products/:product_id
body: {price, title}
*/


app.put(
    '/api/products/:product_id',
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



/* 
En cliente la validacion es OPCIONAL
En el servidor la validacion es SIEMPRE OBLIGATORIA
*/


/* 
GET / => Mensaje/pantalla de bienvenida a la API
GET /healtcheck => Mensaje con una definicion de la sanidad de sus servicios
    {
        ok: true,
        status: 200,
        message: "Healtchek",
        services: [
            {
                name: "Database connection",
                status: 'connected'
            }
        ]
    }
GET /ping => Mensaje de PONG, normalmente para saber si una API da señanes de vida
*/

app.listen(
    PORT,
    () => {
        console.log(`Aplicacion escuchando exitosamente en el puerto ${PORT}`)
    }
)