let { check } = require('express-validator')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Email is required').bail()
    .isEmail()
    .withMessage('Wrong email').bail(),

    check('password')
    .isString()
    .withMessage('Password invalid').bail()
    .notEmpty()
    .withMessage('Password is required').bail()
    .isLength({min : 8, max : 12})
    .withMessage('min 8 and max 12 characters').bail()
    
]