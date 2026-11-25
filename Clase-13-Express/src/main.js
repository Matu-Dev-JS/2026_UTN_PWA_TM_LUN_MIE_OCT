import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import statusRouter from "./routes/status.router.js";
import productRouter from "./routes/product.router.js";


connectMongoDB()


/* Crear nuestra primera API en express */


const PORT = 8080

//Se crea la api de express
const app = express()

//Middleware que permite que nuestro servidor de express PUEDA RECIBIR JSON
app.use(express.json())



app.use('/api/status', statusRouter)
app.use('/api/products', productRouter)




app.listen(
    PORT,
    () => {
        console.log(`Aplicacion escuchando exitosamente en el puerto ${PORT}`)
    }
)