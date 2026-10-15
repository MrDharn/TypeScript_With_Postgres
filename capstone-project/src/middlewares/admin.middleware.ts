import { Request , Response, NextFunction} from "express";
import { AppError } from "../error/error";

export function adminAccess(req: Request, _res: Response, next: NextFunction): void{
    if(req.user?.role !== "ADMIN"){
        next(new AppError(403, "Admin Access only"))
    }

    next()
}