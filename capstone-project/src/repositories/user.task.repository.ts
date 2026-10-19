import { AppError } from "../error/error";
import { pool } from "../lib/db";
import { task } from "../type/task";


type TaskRow = task 
export async function createTask(userId: string, title: string): Promise<TaskRow>{
    try{
        const result = await pool.query(
            `INSERT INTO support_tasks title, userId, 
            VALUES($1, $2)
            `, [title, userId]
        )

        return result.rows[0]
    }catch(err){
        throw new AppError(500, 'Error')
    }
}