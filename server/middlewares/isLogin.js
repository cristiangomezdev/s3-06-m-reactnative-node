let jwt = require('../helpers/generateToken')
let httpStatus = require('../helpers/httpStatus')

class isLogin{
    static async login(req, res, next){
        const user = await jwt.getBearer(req.headers.authorization)
        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                msg: 'Access denied, token expire or incorrect'
            })
        }
        next()
    }
}

module.exports = isLogin