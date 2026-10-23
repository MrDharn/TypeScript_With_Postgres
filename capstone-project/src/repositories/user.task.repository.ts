import { pool } from "../lib/db";
import { task } from "../type/task";


type TaskRow = task 
export async function createTask(userId: string, title: string): Promise<task>{
 
        const result = await pool.query<TaskRow>(
            `INSERT INTO support_tasks (title, user_id), 
            VALUES($1, $2)
            RETURNING id, title, user_id, status, created_at, updated_at
            `, [title, userId]
        )

        return result.rows[0]
}