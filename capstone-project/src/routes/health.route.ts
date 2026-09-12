import express from 'express'

export const healthRoute = express.Router()

healthRoute.route('/health').get((_req, res)=>{
    res.status(200).json({
        status: "false",
        message: "Health Route is working perfectly!!"
    })
})


