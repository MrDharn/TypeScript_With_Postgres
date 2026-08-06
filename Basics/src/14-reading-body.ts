import http, {IncomingMessage, ServerResponse} from "node:http"

const server = http.createServer((req:IncomingMessage, res:ServerResponse)=>{
    const method = req.method?? "GET"
    const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`)
    const pathName = requestUrl.pathname

    res.setHeader("Content-Type", "text/plain")

    type CreateUserBody = {
        name?: string;
        email?: string;
    }
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
                res.end("Both email and password is required")
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
    }

    res.statusCode = 404
    res.end("Route not found")

})