const User = require('../models/User');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const {loginValidate, registerValidate} = require('./validate');

const userController = {
    register: async  function (req, res){

        const {error} = registerValidate(req.body);
        if(error) return res.status(400).send(error.message);

        const selectedUser = await User.findOne({email:req.body.email});
        if(selectedUser) return res.status(400).send('O E-mail já está sendo usado.');

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try{
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }

    },
    login: async function (req, res){

        const {error} = loginValidate(req.body);
        if(error) return res.status(400).send(error.message);

        const selectedUser = await User.findOne({email:req.body.email});

        if(!selectedUser) return res.status(400).send('E-mail ou Senha incorreto');

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if(!passwordAndUserMatch) return res.status(400).send('E-mail ou Senha incorreto');

        req.session.login = req.body.email;
        res.send(true);

        }
}


module.exports = userController