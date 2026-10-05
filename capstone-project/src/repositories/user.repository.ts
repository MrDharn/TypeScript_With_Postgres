import { pool } from "../lib/db";
import { DBUserRow, user } from "../type/user";

export async function checkUserAvailability(email: string): Promise<DBUserRow>{
    const result = await pool.query<DBUserRow>(
        "SELECT id, email,role, created_at FROM users WHERE email = $1", [email]
    )

    return result.rows[0] ?? null
}

export async function createUser(email: string, password_hash: string):Promise<user>{
    const result = await pool.query<DBUserRow>(`
       INSERT INTO users (email, password_harsh) values($1, $2)
       RETURNING id, email, role, created_at
        `, [email, password_hash])

        return result.rows[0]
}