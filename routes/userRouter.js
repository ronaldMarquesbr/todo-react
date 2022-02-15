const express = require('express');
const User = require('../models/User');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/register', userController.register);

router.post('/login',userController.login);

router.get('/users', async (req, res)=> {

    const users = await User.find({});
    let emails = users.map( user => user.email); 

    res.send(emails);

})

// router.get('/userdata', (req, res) => {

//     req

// })

module.exports = router;