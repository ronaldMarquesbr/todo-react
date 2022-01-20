const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const userRouter = require('./login_jwt/routes/userRouter');
const cors = require('cors');
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

app.use( cors({origin: false }))

app.use('/user', express.urlencoded({ extended: true }) ,userRouter);



app.listen(process.env.PORT, ()=> {
    console.log("Running on 3000");
})
