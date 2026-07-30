
const buff = Buffer.from("NODE")
console.log(buff)

console.log(buff.toString("hex"))

console.log(buff.toString("utf-8"))

const allocateBuff = Buffer.alloc(5)

console.log(allocateBuff)

const chunks = [
    Buffer.from("DANIEL"),  
    Buffer.from("NODE"),
    Buffer.from("TYPESCRIPT"),
    Buffer.from("WEED")
]

const combinedChuncks = Buffer.concat(chunks)

console.log(chunks)
console.log(combinedChuncks)
console.log(combinedChuncks.toString("hex"))