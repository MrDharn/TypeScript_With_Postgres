type User = {
    id: number;
    name: string;
    role: "user" | "admin"
}

const users: User[] = [
    {id: 1,
    name: "Dhanr",
    role: "user"
    },
    {id: 2,
    name: "Ox",
    role: "admin"
    },
    {id: 3,
    name: "Daniel",
    role: "user"
    },

]


function funWithCallBack(userId: number, callback: (error: null | Error, user?: User)=> void):void{
    setTimeout(()=>{
        const findUser = users.find((user)=> userId === user.id)

        if(!findUser){
            callback(new Error(`user with id ${userId} cannot be found`))
            return 
        }

        callback(null, findUser )
    }, 500)


}

funWithCallBack(3, (error, user)=>{
    if(error){
        console.log("callback error", error.message)
        return 
    }

    console.log("callback result", user)


})