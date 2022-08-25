let { check, body } = require('express-validator')
let Product = require('../database/models/product')
let User = require('../database/models/user')

module.exports = [
    check('shippingAddress')
    .notEmpty()
    .withMessage('shipping Address is required').bail()
    .isString()
    .withMessage('Wrong shippingAddress, string only').bail(),
    
    check('paymentMethod')
    .notEmpty()
    .withMessage('payment Method is required').bail()
    .isString()
    .withMessage('Wrong paymentMethod, string only').bail(),

    check('products')
    .notEmpty()
    .withMessage('products is required').bail()
    .isArray({min : 1, max: 10})
    .withMessage('Wrong products, products only').bail(),
    
    check('totalPrice')
    .notEmpty()
    .withMessage('totalPrice is required').bail()
    .isNumeric()
    .withMessage('Wrong totalAmount, number only').bail(),

    body('products')
    .custom( async (value)=>{
        let flag = true
        async function existProducts (product){
            let p = await Product.findById(product._id)
            if(p === null){
                return false
            }
            return true
        }

        for(let i= 0; i < value.length; i++) {
            flag = await existProducts(value[i])
            if (!flag) {
                return Promise.reject()
            }
        }
        if (flag) {
            return Promise.resolve()
        }
    })
    .withMessage('A product does not exist.')
]