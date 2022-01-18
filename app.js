const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
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

app.listen(3000, ()=> {
    console.log("Running on 3000");
})
