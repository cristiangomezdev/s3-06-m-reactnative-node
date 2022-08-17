const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categoriesController')
const subcategorieRouter = require('./subCategorie')


router.use('/', subcategorieRouter)


router.get('/', categorieController.getCategories)
router.get('/:id', categorieController.getOneCategories)
router.post('/create', categorieController.addCategorie)
router.put('/edit/:id', categorieController.editCategorie)
router.delete('/delete/:id', categorieController.deleteCategorie)





module.exports = router