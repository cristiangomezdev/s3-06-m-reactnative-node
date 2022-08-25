const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController')
const orderCreateValidation = require('../validator/addOrders')
const orderUpdateValidation = require('../validator/updateOrders')
const { validateFields } = require('../middlewares/validator')
router.get('/', ordersController.getAllOrders)
router.get('/:idOrder', ordersController.getOneOrder)
router.get('/user/:idUser', ordersController.getUserOrders)
router.post('/create/:idUser', orderCreateValidation, validateFields, ordersController.addOrderUser)
router.put('/edit/:id', orderUpdateValidation, validateFields, ordersController.editOrderUser)
router.delete('/delete/:id', ordersController.deleteOrder)


module.exports = router