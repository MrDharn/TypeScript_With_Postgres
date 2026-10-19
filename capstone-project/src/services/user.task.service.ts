import { AppError } from "../error/error";
import { createTask } from "../repositories/user.task.repository";
import { task } from "../type/task";


function checkTaskValidity(title: unknown): string{
    if(typeof title !== 'string' || !title.trim()){
        throw new AppError(400, 'Task title is required!!')
    }

    const trimmedTitle = title.trim()

    if(trimmedTitle.length > 100){
        throw new AppError(400, 'title  Char can only be less than 100')
    }

    return trimmedTitle
}


export async function createUserTask(title:unknown, userId: string): Promise<task>{

    const validateTask =  checkTaskValidity(title)

    return createTask(validateTask, userId)
}