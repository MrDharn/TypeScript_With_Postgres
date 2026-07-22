 import process from "node:process";

 const nodeEnv = process.env.NODE_ENV?? "development"

 const port  = Number(process.env.PORT ?? 3000)

 console.log(nodeEnv, port)

 const command = process.argv[2] ?? "start"

 const shouldFail = process.argv.includes("--fail")
 const shouldCrash = process.argv.includes("--crash")


 process.on("exit", (code)=>{
    console.log(`Process finished with exit code ${code}`)
 })

 function runApp():void{
    console.log({
        command,
    });
    if(shouldFail){
        console.log("Manual failure trigered with --fail flag")
        process.exit(1)
    }
    
    if(shouldCrash){
        console.log("Manual Failure trigered with --fail flag")
        process.exit(1)
    }
 }

 runApp()