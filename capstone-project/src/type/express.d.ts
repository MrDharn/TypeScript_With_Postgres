import { AccessTokenPayLoad } from "./user";

declare global{
    namespace Express{
        interface Request{
            user?: AccessTokenPayLoad;
            token?: string;
        }
    }
}

export {}