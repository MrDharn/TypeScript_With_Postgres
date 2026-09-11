import { NextFunction, Request, Response } from "express";
import {logger} from '../lib/logger'

export function errorHandler(
    err:Error,
    _req: Request,
    res : Response,
    isNext: NextFunction
):void{


    logger.error({err}, "Unknown Error")

    res.status(500).json({
        status: "failed",
        message: "Internal Server Error"
    })

    isNext()
}