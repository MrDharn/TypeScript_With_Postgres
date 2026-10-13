import { env } from "../config/env";
import { AccessTokenPayLoad } from "../type/user";
import jwt ,{SignOptions} from 'jsonwebtoken'



export function signAccessToken(payLoad: AccessTokenPayLoad):string {
    const options: SignOptions = {expiresIn: env.jwtExpiration as SignOptions['expiresIn']}
    
    return jwt.sign(payLoad, env.jwtAccessToken, options)
}