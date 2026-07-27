 import process from "node:process";

 const nodeEnv = process.env.NODE_ENV?? "development"

 const port  = Number(process.env.PORT ?? 3000)

 console.log(nodeEnv, port)

 const command = process.argv[2] ?? "start"

 const shouldFail = process.argv.includes("--fail")
 const shouldCrash = process.argv.includes("--crash")
 const customExitCodeArg = process.argv.find((arg)=> arg.startsWith("--exitCode="))
 const customExitCode = customExitCodeArg ? Number(customExitCodeArg.split("=")[1]) : 1


 process.on("exit", (code)=>{
    console.log(`Process finished with exit code ${code}`)
 })

 process.on("SIGINT", ()=>{
    console.log("Caught SIGINT, shutting down gracefully!!")
    process.exit(0)
 })

 function runCommand(cmd: string): void{
    switch(cmd){
        case "start":
        console.log(`App running on port ${port}`)
        break

        case "test":
            console.log("Testing your projects")
        break

        case "build": 
            console.log("building your projects")
        break

        default:
        console.log(`command is not recognized: ${cmd}`)
    }
 }


 function runApp():void{


    console.log({
        command,
    });
    if(shouldFail){
        console.log("Manual failure trigered with --fail flag")
        process.exit(customExitCode)
    }
    
    if(shouldCrash){
        console.log("Manual crash trigered with --fail flag")
        throw new Error("Simulated crash")
    }

    runCommand(command)
 }
  
 process.on("uncaughtException", (err)=> {
    console.error("UNCAUGHT ERROR EXCEPTION", err)
    process.exit(1)
 })

 process.on("unhandledRejection", (reason)=> {
    console.error("REJECTION", reason)
    process.exit(1)
 })


 runApp()