import path from "node:path";
import fs from 'fs'


const PATH_TO_FILE = path.join(process.cwd(), "file-system", "fs-demo");
const SYN_FILE = path.join(PATH_TO_FILE, "fs-demo.txt")
const CALL_BACK_FILE = path.join(PATH_TO_FILE, "callback.txt")

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
async function main(): Promise<void> {
    try {
        checkIfFolderExists()
        const result = runSyncExample()
        const callback = await runCallBackExample()

        console.log([result, callback])
    } catch (e) {
        const message = e instanceof Error ? e.message : "UNKNOWN ERROR LOG"
        console.error("Error in SYN", message)
    }
}

main()
