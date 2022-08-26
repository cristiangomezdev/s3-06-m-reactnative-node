const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categoriesController')
const subcategorieRouter = require('./subCategorie')
const categorieValidator = require('../validator/categoriesValidator')
const validator = require('../middlewares/validator')

router.use('/', subcategorieRouter)


router.get('/', categorieController.getCategories)
router.get('/:id', categorieController.getOneCategories)
router.post('/create', categorieValidator, validator.validateFields, categorieController.addCategorie)
router.put('/edit/:id', categorieValidator, validator.validateFields, categorieController.editCategorie)
router.delete('/delete/:id', categorieController.deleteCategorie)





module.exports = router