
import http, {IncomingMessage, ServerResponse} from "node:http"

const PORT = 5000;

type User = {
    id: number;
    name: string;
    email: string
}

type ApiResponse <T> = {
    success: boolean;
    message: string;
    data?: T;
    error?: string
}

const users: User[] = [
    {id: 1, name: "dharn", email: "example"},
    {id: 2, name: "sukus", email: "google it"}
]
function sendJson<T>(
    res: ServerResponse, statusCode: number, body: ApiResponse<T>
): void{

    res.statusCode = statusCode
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(body))
}


const server = http.createServer((req:IncomingMessage, res: ServerResponse)=> {
    const method = req.method ?? "GET"
    const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`)
    const pathName = requestUrl.pathname

    if(method === "GET" && pathName === "/"){
       return sendJson(
            res,
            200, {
               success: true,
               message: "data is fetched",
               data: ["GET", "/"],
            }
        )
    }

    if(method === "GET" && pathName === "/users"){
        return sendJson(res, 200, {
            success: true,
            message: "users are fetched",
            data: users
        })
    }

   sendJson(res, 404, {
    success: false,
    message: 'Route not found',
    error: "NOT FOUND"
   })

})


server.listen(PORT, ()=>{
    console.log(`The server is running on localhost ${PORT}`)
})
