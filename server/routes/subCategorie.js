const express = require('express');
const router = express.Router();
const subCategorieController = require('../controllers/subCategorieController')
const subCategorieValidator = require('../validator/subCategoriesValidator')
const validator = require('../middlewares/validator')
router.get('/subCategories', subCategorieController.getSubCategories )
router.get('/subCategorie/:id', subCategorieController.getOneSubCategorie)
router.post('/subCategorie/create', subCategorieValidator, validator.validateFields, subCategorieController.addSubcategorie)
router.put('/subCategorie/edit/:id', subCategorieValidator, validator.validateFields, subCategorieController.editSubCategorie)
router.delete('/subCategorie/delete/:id', subCategorieController.deleteSubCategorie)


module.exports = router