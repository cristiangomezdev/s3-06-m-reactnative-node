const express = require('express');
const router = express.Router();
const subCategorieController = require('../controllers/subCategorieController')

router.get('/subCategories', subCategorieController.getSubCategories )
router.get('/subCategorie/:id', subCategorieController.getOneSubCategorie)
router.post('/subCategorie/create', subCategorieController.addSubcategorie)
router.put('/subCategorie/edit/:id', subCategorieController.editSubCategorie)
router.delete('/subCategorie/delete/:id', subCategorieController.deleteSubCategorie)


module.exports = router