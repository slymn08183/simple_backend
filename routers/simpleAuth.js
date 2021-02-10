const express = require("express");
const {register} = require("../conroller/auth");
const router = express.Router();

// noinspection JSCheckFunctionSignatures
router.post("/register", register);

module.exports = router;