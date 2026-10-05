import { Router } from "express";
import { userRegistration } from "../services/auth.service";
export const authRouter = Router();

authRouter.post('/register', async(req, res, next)=> {
try{
    const {email, password} = req.body

    await userRegistration(email, password);

    res.status(201).json({
        status: "successful",
        message: "user created successfully"
    })

}catch(e){
    next(e)
}
})
