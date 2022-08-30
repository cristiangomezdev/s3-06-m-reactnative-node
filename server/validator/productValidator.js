let { check, body } = require('express-validator')
let Categorie = require('../database/models/categorie')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('name is required').bail()
    .isString()
    .withMessage('Wrong name, string only').bail(),

    check('description')
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
    .optional({checkFalsy : true})
    .isNumeric()
    .withMessage('Wrong discount, number only').bail(),

    check('categoriesId')
    .notEmpty()
    .withMessage('categoriesId is required').bail()
    .isAlphanumeric()
    .withMessage('Wrong categoriesId, string only').bail(),
    
    check('subCategoriesId')
    .notEmpty()
    .withMessage('subCategoriesId is required').bail()
    .isAlphanumeric()
    .withMessage('Wrong subCategoriesId, string only').bail(),

    check('weigth')
    .optional({checkFalsy : true})
    .isNumeric()
    .withMessage('Wrong weigth, number only').bail(),

    body('categoriesId')
    .custom(async (value)=>{
        let categorie = await Categorie.findById(value)
        if (categorie) {
            return Promise.resolve()
        }
        return Promise.reject()

    })
    .withMessage('category does not exist'),

    body('subCategoriesId')
    .custom(async (value, {req})=>{
        let categorie = await Categorie.findById(req.body.categoriesId)
        if (categorie.subCategories.includes(value)) {
            return Promise.resolve()
        }
        return Promise.reject()
    })
    .withMessage('subcategory does not exist within the entered category')
]