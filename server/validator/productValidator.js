let { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('name is required').bail()
    .isString()
    .withMessage('Wrong name, string only').bail(),

    check('descritpion')
    .isEmpty().bail()
    .isString()
    .withMessage('Wrong description, string only').bail()
    .isLength({min : 0,max : 500})
    .withMessage('max 500 characters').bail(),

    check('price')
    .notEmpty()
    .withMessage('price is required').bail()
    .isNumeric()
    .withMessage('Wrong price, number only').bail(),

    check('discount')
    .isEmpty().bail()
    .isNumeric()
    .withMessage('Wrong discount, number only').bail(),

    check('categoriesId')
    .notEmpty()
    .withMessage('categoriesId is required').bail()
    .isString()
    .withMessage('Wrong categoriesId, string only').bail(),
    
    check('subCategoriesId')
    .notEmpty()
    .withMessage('subCategoriesId is required').bail()
    .isString()
    .withMessage('Wrong subCategoriesId, string only').bail(),

    check('weigth')
    .isEmpty().bail()
    .isNumeric()
    .withMessage('Wrong weigth, number only').bail(),
]