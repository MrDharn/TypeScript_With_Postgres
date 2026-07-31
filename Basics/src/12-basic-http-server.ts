// import { IncomingMessage } from "node:http"
import http, {IncomingMessage, ServerResponse} from "node:http"

const PORT = 3000

const server = http.createServer((req: IncomingMessage, res: ServerResponse)=> {
    const method = req.method

    const url = req.url

    const userAgent = req.headers["user-agent"]
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")

    res.end(`Basic http node server: ${method}`)
})

server.listen(PORT, ()=>{
    console.log(`You app has started running ${PORT}`)
})