import { runServer} from "./app";
import {logger} from './lib/logger'
import {env} from './config/env'

const startServer = runServer()

startServer.listen(env.port, ()=> {
    logger.info(`Server is running on the port ${env.port}`)
})