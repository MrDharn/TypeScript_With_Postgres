import expres from 'express'

const healthRoute = expres.Router()

healthRoute.route('/').get((_req, res)=>{
    res.status(200).json({
        status: "false",
        message: "Route is working perfectly!!"
    })
})

module.exports = healthRoute