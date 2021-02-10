const {accessControl} = require("../middlewares/middleware")
const express = require("express");
const router = express.Router();

// noinspection JSCheckFunctionSignatures
router.get("/", accessControl, (req,res,next) =>
{
    throw new SyntaxError("yey")
    res.json({"this": "is a get request"})
})

module.exports = router;