const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper( async (req, res ,next) => {

    let user;

    const {name,email,password} = req.body
    user = await  User.create({
        name,
        email,
        password
    });
    res
        .status(200)
        .json({
            success: true,
            data: user
        });
})

module.exports = {register};