const {accessControl} = require("../middleware")
const express = require("express");
const router = express.Router();


// noinspection JSCheckFunctionSignatures
router.post("/", accessControl,(req,res,next) =>
{
    res.json({"this": "is a post request"})
})


module.exports = router;