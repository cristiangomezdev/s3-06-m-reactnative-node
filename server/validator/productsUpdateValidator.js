let { check, body } = require('express-validator')
let Categorie = require('../database/models/categorie')

module.exports = [
    check('name')
    .optional({checkFalsy : true})
    .isString()
    .withMessage('Wrong name, string only').bail(),

    check('description')
    .optional({checkFalsy : true})
    .isString()
    .withMessage('Wrong description, string only').bail()
    .isLength({min : 0,max : 500})
    .withMessage('max 500 characters').bail(),

    check('price')
    .optional({checkFalsy : true})
    .isNumeric()
    .withMessage('Wrong price, number only').bail(),

    check('discount')
    .optional({checkFalsy : true})
    .isNumeric()
    .withMessage('Wrong discount, number only').bail(),

    check('categoriesId')
    .optional({checkFalsy : true})
    .isAlphanumeric()
    .withMessage('Wrong categoriesId, string only').bail(),
    
    check('subCategoriesId')
    .optional({checkFalsy : true})
    .isAlphanumeric()
    .withMessage('Wrong subCategoriesId, string only').bail(),

    check('weigth')
    .optional({checkFalsy : true})
    .isNumeric()
    .withMessage('Wrong weigth, number only').bail(),

    body('categoriesId')
    .custom(async (value)=>{
        if (value === undefined || value === "" ) {
            return Promise.resolve()
        }
        let categorie = await Categorie.findById(value)
        if (categorie) {
            return Promise.resolve()
        }
        return Promise.reject()

    })
    .withMessage('category does not exist'),

    body('subCategoriesId')
    .custom(async (value, {req})=>{
        if (value === undefined || value === "" || req.body.categoriesId === undefined ) {
            return Promise.resolve()
        }
        let categorie = await Categorie.findById(req.body.categoriesId)
        if (categorie.subCategories.includes(value)) {
            return Promise.resolve()
        }
        return Promise.reject()
    })
    .withMessage('subcategory does not exist within the entered category')
]