
import {Pool} from 'pg'
import { env } from 'process'

export const pool = new Pool({

    connectionString: env.databaseUrl

})