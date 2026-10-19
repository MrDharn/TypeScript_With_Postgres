import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { createUserTask } from "../services/user.task.service";

export  const userTask = Router()

userTask.use(authenticate)

userTask.post('/', async(req, res, next)=> {
    try{    
        const task = createUserTask(req.body.title, req.user!.userId)
        res.status(201).json({
            status: 'success',
            message: 'Task created successfully',
            data: {task}
        })
    }catch(err){
        next(err)
    }
})