import http, {IncomingMessage, ServerResponse} from "node:http"

const PORT = 3000

    type CreateUserBody = {
        name?: string;
        email?: string;
    }

const server = http.createServer((req:IncomingMessage, res:ServerResponse)=>{
    const method = req.method?? "GET"
    const requestUrl = new URL(req.url ?? "/", `http://${req.headers.hostname ?? "localhost"}`)
    const pathName = requestUrl.pathname


    // console.log(method, requestUrl, pathName) hostname or host (both works)

    res.setHeader("Content-Type", "text/plain")
    if(method === "POST" && pathName === "/users"){
        const chunks: Buffer [] = []

        req.on("data", (chunk: Buffer)=>{
            chunks.push(chunk)
        })

        req.on("end", ()=> {
            try{
                  const rawBody = Buffer.concat(chunks).toString('utf-8')
            if(!rawBody){
                res.statusCode = 400
                res.end("req body is required")
                return
            }

            const body = JSON.parse(rawBody) as CreateUserBody

            if(!body.name || !body.email){
                res.statusCode = 400
                res.end("Both email and name are required")
                return
            }

            res.statusCode = 201
            res.end(`User is created successfully!!!`)

            }catch(e){
                res.statusCode = 400
                res.end("Invalid JSON")     
            }

        })

        req.on("error", ()=>{
            res.statusCode = 500
            res.end("Failed to read request body")
        })

        return
    }

    res.statusCode = 404
    res.end("Route not found")

})

server.listen(PORT, ()=> {
    console.log(`The server is running on the localhost ${PORT}`)
})