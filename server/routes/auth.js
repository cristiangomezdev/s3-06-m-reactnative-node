const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const loginValidator = require('../validator/loginValidator')
const registerValidator = require('../validator/registerValidator')
const validator = require('../middlewares/validator')

router.post('/login', loginValidator, validator.validateFields, authController.login)
router.post('/register', registerValidator, validator.validateFields,  authController.register)


module.exports = router