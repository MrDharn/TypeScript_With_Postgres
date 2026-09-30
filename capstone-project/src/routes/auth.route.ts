import { Router } from "express";

export const authRouter = Router();

authRouter.post('/register', async(req, res, next)=> {
try{
    const {email, password} = req.body

    await userRegistration(email, password);
}catch(e){
    next(e)
}
})



async function userRegistration(email: string, password: string){
    
}