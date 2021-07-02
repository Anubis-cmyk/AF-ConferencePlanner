const express = require('express');
const route= express.Router();
const UserController = require('../controller/UserControll');


module.exports = function () {
    //POST User signUp
    route.post('/signUp', UserController.SignUp);
    return route;
}