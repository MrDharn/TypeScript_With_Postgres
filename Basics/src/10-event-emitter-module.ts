import EventEmitter from "node:events";

const eventEmitter = new EventEmitter()

type userInterface = {
    id: number;
    email: string;
}


eventEmitter.on("user:registration", (user: userInterface)=>{
    console.log(`Email Event is being sent to the email ${user.email}`)
})

eventEmitter.on("user:registration", (user:userInterface)=>{
    console.log(`${user.id} and the user with email ${user.email} logged in successfully`)
})


eventEmitter.once("server started", ()=>{
    console.log("this will trigger once")
})

function userRegistration():void{
    const user = {
        id: 1,
        email: "dharn247@example.com"
    }

    console.log("user is saved")

    eventEmitter.emit("user:registration", user)
}

eventEmitter.emit("server started")

userRegistration()