 function timeOutExample():void{
    console.log("1. This runs First")

    setTimeout(()=>{
        console.log("2. This is to be run again")
    }, 1000)

    console.log("3. This runs latter")
 }


 function runFunc():void{
    timeOutExample()
 }

 runFunc()