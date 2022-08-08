let User = require('../database/models/user')
let httpStatus = require('../helpers/httpStatus')
let jwt = require('../helpers/generateToken')
let bcryptjs = require('bcryptjs')
const Nodemailer = require('../service/nodemailer')
require('dotenv').config()


class AuthController {
    static async register(req, res) {
        let { name, password, email } = req.body
        let user = new User({
            name,
            password : bcryptjs.hashSync(password, 10),
            email : email.trim(),
            avatar: 'default_img.png',
            admin: false
        })

        try {
            await user.save()
        } catch (error) {
            if (error.code === 11000) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    msg: 'email already registered'
                })
            }
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }
        const data = {
            name : user.name,
            subject : '¡Gracias por registrarte con nosotros!',
            url : process.env.HOST_FRONT
        };
        let token = jwt.tokenSign(user)
        const sendEmail = new Nodemailer(data, user.email, token)
        sendEmail.sendEmail()

        res.status(httpStatus.CREATED).json({
            msg: 'user succesfelly created',
            token,
            user
        })
    }

    static async login (req, res){
        let {email , password} = req.body

        let user = null
        try {
            user = await User.findOne({ email : email.trim(),})
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }


        if (user) {
            if (!bcryptjs.compareSync(password, user.password)) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    msg : 'credentials incorrect'
                })
            }

            let token = jwt.tokenSign(user)

            return res.status(httpStatus.OK).json({
                msg : 'successful login',
                token : token,
                user
            })
        }
        res.status(httpStatus.NOT_FOUND).json({
            msg : 'User not found'
        })

        
    }
}


module.exports = AuthController