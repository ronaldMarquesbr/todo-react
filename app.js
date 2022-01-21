const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./login_jwt/routes/userRouter');
require('dotenv').config()


mongoose.connect(process.env.MONGO_CONNECTION_URL, (error)=> {
    if(error){
        console.log(error)
    } else {
        console.log('Mongo Connected');
    }
});


if(process.env.NODE_ENV != 'development'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'), function(error){
            if(error){
                res.status(500).send(error);
            }
        })
    })
}

app.use('/user/users',cors({origin: "http://localhost:5000", methods: ['GET'] }))

app.use('/user', express.urlencoded({ extended: true }) ,userRouter);

app.listen(process.env.PORT, ()=> {
    console.log("Running on 3000");
})
