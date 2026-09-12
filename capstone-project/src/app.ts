import express, { urlencoded } from 'express'
import { notFound } from './middlewares/notFound'
import { errorHandler } from './middlewares/errorHandler'

export const runServer = ()=> {
    const app = express()
    app.use(express.json())
    app.use(urlencoded({extended: true}))

    app.use(notFound)
    app.use(errorHandler)
}