const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }

});


module.exports = mongoose.model('user', UserSchema);