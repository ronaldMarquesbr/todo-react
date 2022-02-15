const express = require('express');
const User = require('../models/User');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/emaillist', userController.emailList);

router.get('/userdata', userController.userdata);

module.exports = router;