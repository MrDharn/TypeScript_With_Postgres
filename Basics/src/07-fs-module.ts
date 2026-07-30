import path from "node:path";
import fs from 'fs'
import fsPromises from "fs/promises"


const PATH_TO_FILE = path.join(process.cwd(), "file-system", "fs-demo");
const SYN_FILE = path.join(PATH_TO_FILE, "fs-demo.txt")
const CALL_BACK_FILE = path.join(PATH_TO_FILE, "callback.txt")
const PROMISE_FILE = path.join(PATH_TO_FILE, "promise.txt")


type fileResult = {
    type: string;
    fileName: string;
    content: string;
    fileInByte: number;
}

function checkIfFolderExists(): void {
    if (!fs.existsSync(PATH_TO_FILE)) {
        fs.mkdirSync(PATH_TO_FILE, { recursive: true })
    }
}
function runSyncExample(): fileResult {

    fs.writeFileSync(SYN_FILE, "This is content", "utf-8")
    fs.appendFileSync(SYN_FILE, "Append file using SYN means", "utf-8")
    const content = fs.readFileSync(SYN_FILE, 'utf-8')
    const fileSize = fs.statSync(SYN_FILE)

    return {
        type: "SYNC",
        fileName: path.basename(SYN_FILE),
        content,
        fileInByte: fileSize.size
    }
}



function runCallBackExample(): Promise<fileResult> {
    return new Promise((resolve, reject) => {
        fs.writeFile(CALL_BACK_FILE, "using callback to write", "utf-8", (error) => {
            if (error) {
                reject(error)
                return
            }
            fs.appendFile(CALL_BACK_FILE, "appending file using callback", "utf-8", (error) => {
                if (error) {
                    reject(error.message)
                    return
                }

                fs.readFile(CALL_BACK_FILE, "utf-8", (error, result) => {
                    if (error) {
                        reject(error.message)
                        return
                    }

                    fs.stat(CALL_BACK_FILE, (error, stat) => {
                        if (error) {
                            reject(error.message)
                            return
                        }
                        resolve({
                            type: "CALL BACK ",
                            fileName: path.basename(CALL_BACK_FILE),
                            content: result,
                            fileInByte: stat.size
                        })
                    })
                })
            })
        })

    })
}

async function runPromiseExample(): Promise<fileResult>{
    
        await fsPromises.writeFile(PROMISE_FILE, "Created this using promise", "utf-8")
        await fsPromises.appendFile(PROMISE_FILE, "appending file using promise", "utf-8")
        const content = await fsPromises.readFile(PROMISE_FILE, "utf-8")
        const statSize = await fsPromises.stat(PROMISE_FILE)
        return {
            type: "Promises",
            fileName: path.basename(PROMISE_FILE),
            content,
            fileInByte: statSize.size
        }
}
async function main(): Promise<void> {
    try {
        checkIfFolderExists()
        const result = runSyncExample()
        const callback = await runCallBackExample()
        const promiseMeans = runPromiseExample()

        console.log([result, callback, promiseMeans])
    } catch (e) {
        const message = e instanceof Error ? e.message : "UNKNOWN ERROR LOG"
        console.error("Error in SYN", message)
    }
}

main()
