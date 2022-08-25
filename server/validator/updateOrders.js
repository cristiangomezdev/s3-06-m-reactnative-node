let { check } = require('express-validator')

module.exports = [
    check('status')
    .optional({checkFalsy : true})
    .isString()
    .withMessage('Wrong status, string only').bail(),

    check('shippingAddress')
    .optional({checkFalsy : true})
    .isString()
    .withMessage('Wrong shippingAddress, string only').bail(),
    
    check('paymentMethod')
    .optional({checkFalsy : true})
    .isString()
    .withMessage('Wrong paymentMethod, string only').bail(),
]