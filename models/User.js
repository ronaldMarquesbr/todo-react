const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required:true, minlength:3, maxlength:50},
    email: {type:String, required:true, minlength:10, maxlength:80},
    password: {type:String, required:true, minlength:6, maxlength:80},
    admin:{type: Boolean, default:false},
    tasks: {type: Array},
    createdAt: {type:Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);