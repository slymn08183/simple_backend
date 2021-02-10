const {accessControl} = require("../middlewares/middleware")
let {users} = require("../data/users");
const express = require("express");
const router = express.Router();

// noinspection JSCheckFunctionSignatures
router.put("/", accessControl, (req, res, next) =>{
    const id = parseInt(req.get("id"));
    let i = 0 ;
    for (;i< users.length; i++){
        if(users[i].id === id){
            users[i] = {
                ...users[i],
                ...req.body
            }
            break;
        }
    }

    res.json({
        success: true,
        data: users[i],
        allData: users
    })

})

module.exports = router;

