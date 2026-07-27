import crypto from "node:crypto"

const requestId = crypto.randomUUID()

console.log(requestId)

const resetToken = crypto.randomBytes(16).toString("hex")
console.log(resetToken)


const text = "hell node"

const hash = crypto.createHash('sha256').update(text).digest('hex')
console.log(hash)


const secret = "my_secret_key"
const data = "my Data"

const signature = crypto.createHmac("sha256", secret).update(data).digest('hex')

console.log(signature)
