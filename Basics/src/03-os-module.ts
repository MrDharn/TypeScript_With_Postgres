import * as os from 'node:os'

function runOsDemo(): void{
    console.log("platform", os.platform())
    console.log("architecture", os.arch())
    console.log("os type", os.type())
    console.log("os Release", os.release())
    console.log("home directory", os.homedir())
    console.log("temp directory", os.tmpdir())

    const cpus = os.cpus()
    console.log(cpus.length)


    console.log(cpus)

    console.log(os.totalmem(), os.freemem())
}

runOsDemo()