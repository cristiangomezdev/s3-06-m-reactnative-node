const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController')

router.get('/', ordersController.getAllOrders)
router.get('/:idOrder', ordersController.getOneOrder)
router.get('/user/:idUser', ordersController.getUserOrders)
router.post('/create/:idUser', ordersController.addOrderUser)
router.put('/edit/:id',ordersController.editOrderUser)
router.delete('/delete/:id', ordersController.deleteOrder)


module.exports = router