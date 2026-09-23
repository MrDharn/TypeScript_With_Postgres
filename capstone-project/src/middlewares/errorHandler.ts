import { NextFunction, Request, Response } from "express";
import {logger} from '../lib/logger'
import {AppError} from '../error/error'
export function errorHandler(
    err:Error,
    _req: Request,
    res : Response,
    isNext: NextFunction
):void{

    if(err instanceof AppError){
        res.status(err.statusCode).json({
            status: 'failed',
            message: err.message
        })
    }

    logger.error({err}, "Unknown Error")

    res.status(500).json({
        status: "failed",
        message: "Internal Server Error"
    })

    isNext()
}