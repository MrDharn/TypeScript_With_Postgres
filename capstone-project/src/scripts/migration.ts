import path from "node:path"
import { pool } from "../lib/db"
import fs from 'node:fs'
import { logger } from "../lib/logger"
const MIGRATION_DIR = path.join(process.cwd(), 'migrations')

const CREATE_MIGRATIONS_TABLE_SQL = `
 CREATE TABLE IF NOT EXISTS migrations(
    id SERIAL PRIMARY KEY,
    name VARCHAR(225) NOT NULL UNIQUE,
    executedAt TIMESTAMP NOT NULL DEFAULT NOW()
 )
`

type MigrationRow = {
    name: string
}

async function getExecutedMigrations():Promise<String[]>{
    const result = await pool.query<MigrationRow>(
        "SELECT name FROM migrations ORDER BY name"
    )
    return result.rows.map((row: MigrationRow)=> row.name)
}

function getMigrationsFiles():string[]{
    return fs.readdirSync(MIGRATION_DIR).filter((file)=> file.endsWith('.sql')).sort()
}


async function migrate():Promise<void>{
    await pool.query(CREATE_MIGRATIONS_TABLE_SQL)

    const executed = new Set(await getExecutedMigrations())
    const pending = getMigrationsFiles().filter((file)=> !executed.has(file))

    if(pending.length === 0){
        logger.info('There is no Pending table')
        return
    }

    for(const fileName of pending){
        await runMigration(fileName)
    }
}

migrate()