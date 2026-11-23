import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'


connectMongoDB()


/* Crear nuestra primera API en express */


const PORT = 8080

//Se crea la api de express
const app = express()

//Middleware que permite que nuestro servidor de express PUEDA RECIBIR JSON
app.use(express.json())

app.get(
    '/test',
    (request, response) => {
        response.send(`<h1>Hola desde express!!!</h1>`)
    }
)

app.post(
    '/test',
    (request, response) => {

        console.log('Datos recibidos: ', request.body)
        
        response.send({
            ok: true,
            message: 'POST recibido!!'
        })
    }
)

app.get(
    '/',
    (request, response) => {
        console.log('hola mundo?')

        response.send({
            ok: true,
            message: "Hola desde la API!"
        })
    }
)


app.listen(
    PORT,
    () => {
        console.log(`Aplicacion escuchando exitosamente en el puerto ${PORT}`)
    }
)