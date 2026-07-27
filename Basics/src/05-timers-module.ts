 function timeOutExample():void{
    console.log("1. This runs First")

    setTimeout(()=>{
        console.log("2. This is to be run again")
    }, 1000)

    console.log("3. This runs latter")
 }

 function clearTimeoutExample():void{
   
   const timeout = setTimeout(()=>{
      console.log("this will not run")
   }, 4000)
   
   clearTimeout(timeout)
 }
 function runClearTimeoutExample():void{
   let count = 0
   const setTime = setInterval(()=>{
      count++
      console.log("You are counting here")
      if(count === 6){

         clearInterval(setTime)

      }
   }, 2000)

 }

 function runImmediateExample():void{
     setImmediate(()=> {
      console.log("setImmediate callback");
     })

     console.log("synchronous code after Calling")
 }

 function runFunc():void{
    timeOutExample()
    runClearTimeoutExample()
    runClearTimeoutExample()
   clearTimeoutExample()
   runImmediateExample()
 }

 runFunc()