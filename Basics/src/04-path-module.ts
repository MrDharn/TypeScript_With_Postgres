import path from "node:path";
 
const projectRoot = process.cwd()

console.log(projectRoot)
console.log(path.dirname('04-path-module.ts'))

//cwd/uploads/users/userId/fileName

const fileName = "photo.png"
const userId = "45"

const filePathToUpload = path.join(projectRoot, "uploads", "users", userId, fileName)

console.log(filePathToUpload)