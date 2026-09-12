// all routes combined
import {healthRoute} from './health.route'
import express from 'express'

export const apiRouter = express.Router()

apiRouter.use(healthRoute)