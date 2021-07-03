const express = require('express');
const router = express.Router();
const controller = require('../../controller/userCtrl/UserControll');

module.exports = function () {
    //POST ContactUs Details
    router.post('/signUp', controller.signup);
    //GET all ContactUs Details
    router.post('/signIn', controller.signin);
    return router;
}