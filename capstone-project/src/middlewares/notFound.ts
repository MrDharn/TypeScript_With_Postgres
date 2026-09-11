import { Request, Response } from "express";

export function notFound(_req: Request, res: Response){
    return res.status(404).json({
        status: "false",
        message: "Route not Found"
    })
}