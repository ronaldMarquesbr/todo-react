const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const taskRouter = require('./routes/taskRouter');
const session = require('express-session');
require('dotenv').config()


mongoose.connect(process.env.MONGO_CONNECTION_URL, (error)=> {
    if(error){
        console.log(error)
    } else {
        console.log('Mongo Connected');
    }
});


app.use(session({
    name: 'sessao',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(cors({origin: "http://localhost:5000"}));

if(process.env.NODE_ENV != 'development'){
    app.use(express.static( path.join(__dirname, 'client','build') , {index: false} ));

    app.get('/', (req, res) => {

        if(req.session.login){
            console.log('já tem a sessão: ', req.session.login);
        } else {
            console.log("não tem sessão")
        }   
        res.sendFile( path.join(__dirname, 'client', 'build', 'index.html' ))
        
    })
       
}

app.use('/user', express.urlencoded({ extended: true }), userRouter);

app.use('/task', express.urlencoded({ extended: true }), taskRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, ()=> {
    console.log("Running on 3000");
})
