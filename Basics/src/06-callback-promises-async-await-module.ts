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



function getUserWithPromise(userId: number): Promise<User>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const fetchUser =  users.find((user)=> user.id === userId)

            if(!fetchUser){
            
                reject(new Error(`Sorrry there is no user with the id ${userId}`))
                return
            }

            resolve(fetchUser)
        }, 1000)
    })
}


async function  findUserWithAsyncAwait(userId:number):Promise<void> {
    try{

        const getUser = await getUserWithPromise(userId);
        console.log(`${getUser?.name}`)
        return 

    }catch(e){
        const message = e instanceof Error ? e.message : "UNKNOWN"
        console.log("async/ await ",message)
    }
}

// getUserWithPromise(10).then((user)=>{
//     console.log("promise result", user?.id, user?.name, user?.role)
// }).catch((error: Error)=>{
//     console.log("Error message", error)
// })


findUserWithAsyncAwait(10)