import express, { urlencoded } from 'express'
import { notFound } from './middlewares/notFound'
import { errorHandler } from './middlewares/errorHandler'
import cors from 'cors'
import { apiRouter } from './routes'
export const runServer = ()=> {

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(urlencoded({extended: true}))

    app.use('/api', apiRouter)
    app.use(notFound)
    app.use(errorHandler)

    return app
}