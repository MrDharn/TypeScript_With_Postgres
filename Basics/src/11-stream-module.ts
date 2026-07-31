import {Readable, Transform, Writable } from "node:stream";
import {pipeline} from 'node:stream/promises'

const readableStream = Readable.from([
    "read", "node", "typescript"
]) 


const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const text = chunk.toString()

        callback(null, text.toUpperCase())
    },

})

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('received chunk', chunk.toString())
        callback()
    },

})

async function main():Promise<void>{
    try{
        await pipeline(readableStream, upperCaseTransform, writableStream)
        console.log("PIPELINE IS COMPLETE")

    }catch(e){
        const message = e instanceof Error ? e.message : "UNKNOWN ERROR"
        console.log(message)
    }
}

main()