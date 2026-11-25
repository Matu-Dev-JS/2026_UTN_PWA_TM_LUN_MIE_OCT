import express from 'express'


const statusRouter = express.Router()

statusRouter.get(
    '/ping', // GET /api/status/ping
    (request, response) => {
    
        response.send(
            {
                ok: true,
                message: "Pong!"
            }
        )
    }
)


statusRouter.get(
    '/',
    (request, response) => {
    
        response.send(
            {
                ok: true,
            }
        )
    }
)


export default statusRouter