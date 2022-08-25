let { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('name is required').bail()
    .isString()
    .withMessage('Wrong name, string only').bail(),
    
    check('subCategoriesId')
    .isAlphanumeric()
    .withMessage('Wrong subCategoriesId, string only').bail(),

]