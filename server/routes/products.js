const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.getProducts)
router.get('/:id', productsController.getOneProducts)
router.post('/create', productsController.addProduct)
router.put('/edit/:id', productsController.editProduct)
router.delete('/delete/:id', productsController.deleteProduct)





module.exports = router