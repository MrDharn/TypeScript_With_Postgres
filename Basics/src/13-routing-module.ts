import http, {IncomingMessage, ServerResponse} from "node:http"

const PORT = 5000

const server = http.createServer((
    req: IncomingMessage, res: ServerResponse
)=>{
    const method = req.method?? "GET"
    const requestUrl = new URL(req.url?? "/", `http:${req.headers.hostname}`)
    const pathName = requestUrl.pathname
    res.setHeader("Content-Type", 'text/plain')

    if(method === "GET" && pathName === '/health'){
        res.statusCode = 200
        res.end("This is health Endpoint")
        return
    }

    if(method === "GET" && pathName === '/users'){
        res.statusCode = 200
        res.end("This lists user")
        return
    }

    if(method === "POST" && pathName === '/register'){
        res.statusCode = 201
        res.end("This has submitted a form")
        return 
    }

    res.statusCode = 404
    res.end("Not Found")

})

server.listen(PORT, ()=> {
    console.log(`The server has started running on the port ${PORT}`)
})