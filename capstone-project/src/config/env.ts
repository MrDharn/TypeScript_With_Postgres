import dotenv from 'dotenv'
dotenv.config()


export function checkRequiredValue(key: string):string{
    const value = process.env.key
    if(!value){
        throw new Error(`The key ${key} is empty`)
    }

    return value
}
export const env = {
    port: Number(process.env.PORT ?? 3000),
    isProduction: (process.env.NODE_ENV ?? 'development') === 'production',
    isDev: process.env.NODE_ENV ?? 'development',
    logLevel: process.env.LOG_LEVEL,
    databaseUrl: checkRequiredValue('DATABASE_URL')
} as const
