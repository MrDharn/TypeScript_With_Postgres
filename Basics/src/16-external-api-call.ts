const API_URL = "https://jsonplaceholder.typicode.com/users/1"

type ExternalApi = {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    }
}

type PublicApi = {
    id: number;
    name: string;
    email: string;
    company: string;
}

function ConvertExternalToPublic(rawData: ExternalApi): PublicApi {
    return {
        id: rawData.id,
        name: rawData.name,
        email: rawData.email,
        company: rawData.company.name
    }
} 

async function fetchExternalUser(): Promise<void>{
    const controller = new AbortController()
    const timer = setTimeout(()=>{
        controller.abort()       
    }, 5000)

    try{
        const response = await fetch(API_URL, {
            method: "GET",
            signal: controller.signal
        })

        if(!response.ok){
            console.error(`upstream response failed with http ${response.status}`)
            return
        }

        const rawUser = (await response.json()) as ExternalApi

        const user = ConvertExternalToPublic(rawUser)
        console.log(user)

    }catch(e){
        if(e instanceof Error && e.name === "Abort Error"){
            console.log("failed to fetch API cause the duration is too long")
            return
        }

        const message = e instanceof Error? e.message : "UNKNOWN ERROR"
        console.log("Failed", message)
    } finally{
        clearTimeout(timer)
    }
}


fetchExternalUser()