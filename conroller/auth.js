const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const sentJwtToClient = require("../helpers/authorization/sendJwtToClient");
const register = asyncErrorWrapper( async (req, res ,next) => {

    let user;

    const {name,email,password} = req.body
    user = await  User.create({
        name,
        email,
        password
    });
    sentJwtToClient(user, res);
})

module.exports = {register};