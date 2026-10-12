export type user = {
    id: string,
    email: string,
    role: string,
    created_at: Date
}

export type DBUserRow = {
    id:string;
    email: string;
    role: string;
    created_at: Date
}

export type DBUserRowWithPassword = DBUserRow & {
    password_hash: string | null;
}


export type AccessTokenPayLoad = {
    userId: string,
    email: string,
    role: string
}