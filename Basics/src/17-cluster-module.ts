import cluster from "node:cluster";
import http, {IncomingMessage, ServerResponse} from "node:http"
import os from "os"

const numCPUs = os.availableParallelism()
if(cluster.isPrimary){
    console.log(`Primary Process ${process.pid} is running`)
    for(let i = 0; i< numCPUs; i++){
        cluster.fork()
    }

    cluster.on("exit", (worker, code, signal)=> {
        console.log(`worker ${worker.process.pid} died. Forking a new one...`)
        console.log(code, signal)
        cluster.fork()
    })
}else{
    http.createServer((req: IncomingMessage, res: ServerResponse)=> {
        res.writeHead(200)
        res.end(`Process is from worker ${process.pid} `)
    }).listen(8080)

    console.log(`Worker process ${process.pid} has started`)
}