const express = require("express");
const app = express();
const accessControl = (req,res,next) => {
    console.log("Middeleware access control")
    const access = false;
    app.use(express.json());

    if (req.query.admin !== "admin" && req.get("admin") !== "admin"){

        res.status(401).json({
            success: false,
            message: "Not authorized!"
        })
    }
    else{
        next();
    }

};



module.exports = {
    accessControl
};