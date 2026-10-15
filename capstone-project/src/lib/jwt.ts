import { env } from "../config/env";
import { AppError } from "../error/error";
import { AccessTokenPayLoad } from "../type/user";
import jwt ,{SignOptions} from 'jsonwebtoken'



export function signAccessToken(payLoad: AccessTokenPayLoad):string {
    const options: SignOptions = {expiresIn: env.jwtExpiration as SignOptions['expiresIn']}
    
    return jwt.sign(payLoad, env.jwtAccessToken, options)
}

export function verifyToken(token: string):AccessTokenPayLoad{
    try{
        return jwt.verify(token, env.jwtAccessToken) as AccessTokenPayLoad
    }catch(e){
        throw new AppError(401, 'Invalid or Expired Token')
    }
}