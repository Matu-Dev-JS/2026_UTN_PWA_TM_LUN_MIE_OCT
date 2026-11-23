import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'


connectMongoDB()


/* Crear nuestra primera API en express */


const PORT = 8080

//Se crea la api de express
const app = express()

//Middleware que permite que nuestro servidor de express PUEDA RECIBIR JSON
app.use(express.json())


//Controlador
app.get(
    '/ping', 
    (request, response) => {
    
        response.send(
            {
                ok: true,
                message: "Pong!"
            }
        )
    }
)


const products = []

app.get(
    '/products', 
    (request, response) => {
        
        response.send({
            ok: true,
            message: "Lista de productos obtenida",
            data: {
                products: products
            }
        })
    }
)


/* 
POST /products
body: {title, price} 
*/

app.post(
    '/products', 
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