import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/error";
import { verifyToken } from "../lib/jwt";
export function authenticate(req: Request, _res: Response, next: NextFunction):void{
    const header = req.headers.authorization
    const token = header && header.split(' ')[1]

    if(!token){
        throw new AppError(401, "Token is required")
        return
    }
    req.user = verifyToken(token)

    next()

}