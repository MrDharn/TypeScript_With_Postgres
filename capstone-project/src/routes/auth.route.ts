import { Router } from "express";
import { userLogin, userRegistration } from "../services/auth.service";
import { authenticate } from "../middlewares/auth.middleware";
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


authRouter.post('/login', async(req, res, next)=> {
    try{
        const {email, password} = req.body

        const {accessToken} = await userLogin(email, password)

        res.status(200).json({
            status: "failed",
            data: {accessToken}
        })
    }catch(e){
        next(e)
    }
})

authRouter.get('/me', authenticate, (req, res)=> {
    res.status(200).json({
        status: 'successful',
        data: req.user
    })
})