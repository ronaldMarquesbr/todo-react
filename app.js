const express = require('express');
const app = express();
const path = require("path");
const { createEngine } = require('express-react-views');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./login_jwt/routes/userRouter');
const session = require('express-session');
require('dotenv').config()


mongoose.connect(process.env.MONGO_CONNECTION_URL, (error)=> {
    if(error){
        console.log(error)
    } else {
        console.log('Mongo Connected');
    }
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.use(session({secret: 'segredo'}));


if(process.env.NODE_ENV != 'development'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('/', (req, res) => {

        if(req.session.email){
            res.render('app', {user: req.session.email});
        } else {
            res.sendFile(path.join(__dirname, '/client/build/index.html'));
        }
    })

       
}


app.use('/user/users',cors({origin: "http://localhost:5000", methods: ['GET'] }))

app.use('/user', express.urlencoded({ extended: true }) ,userRouter);

app.get('/app', (req, res) => {

    res.render('app', {user: 'ronaldpmarques01@gmail.com'});

})

app.listen(process.env.PORT, ()=> {
    console.log("Running on 3000");
})
