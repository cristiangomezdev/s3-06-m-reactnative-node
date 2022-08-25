let { check, body } = require('express-validator')
let Product = require('../database/models/product')

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

    check('products')
    .optional({checkFalsy : true})
    .isArray({min : 1, max: 10})
    .withMessage('Wrong products, products only').bail(),

    check('totalPrice')
    .optional({checkFalsy : true})
    .isNumeric()
    .withMessage('Wrong totalAmount, number only').bail(),

    body('products')
    .custom( async (value, {req})=>{
        if(!req.body.products){
            return Promise.resolve()
        } 
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