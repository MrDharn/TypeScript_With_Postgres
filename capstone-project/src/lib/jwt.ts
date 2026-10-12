import { env } from "../config/env";
import { AccessTokenPayLoad } from "../type/user";
import jwt, {SignOptions} from 'jwt'



export function signAccessToken(payLoad: AccessTokenPayLoad):string {
    const options: SignOptions = {expiresIn: env.jwtExpiration as SignOptions}
    
    return jwt.sign(payLoad, env.jwtAccessToken, options)
}