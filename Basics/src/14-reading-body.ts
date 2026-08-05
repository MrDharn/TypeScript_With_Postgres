import http , {IncomingMessage, ServerResponse} from 'node:http'

const PORT = 4002

type UserSchema = {
    name?: string;
    email?: string;
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse)=> {

    const method = req.method ?? "GET"
    const requestUrl = new URL(req.url?? "/", `http:${req.headers.hostname}`)
    const pathName = requestUrl.pathname

    res.setHeader("Content-Type", "text/plain");

    if(method === "POST" && pathName === "/users"){
        const chunks: Buffer[] = [] 

        req.on("data", (chunk: Buffer)=> {
            chunks.push(chunk)
        })

        req.on("end", ()=>{
            try{

                const rawBody = Buffer.concat(chunks).toString('utf-8')
                if(!rawBody){
                    res.statusCode = 400
                    res.end("req body is required")
                    return
                }
    
                const body = JSON.parse(rawBody) as UserSchema
    
                if(!body.name || !body.email){
                    res.statusCode = 400
                    res.end("both name and email is required")
                    return
                }

                res.statusCode = 201
                res.end(`User created ${body.name} and ${body.email}`)
            }catch(e){
                res.statusCode = 400
                res.end("Invalid json body")
            }
        })
    }
})

