let { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('name is required').bail()
    .isString()
    .withMessage('Wrong name, string only').bail(),
    
    check('categorieId')
    .isEmpty()
    .isAlphanumeric()
    .withMessage('Wrong categorieId, string only').bail(),

]