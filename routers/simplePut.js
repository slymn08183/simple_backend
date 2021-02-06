const {accessControl} = require("../middleware")
let {users} = require("../data/users");
const express = require("express");
const router = express.Router();

let i = 0 ;
// noinspection JSCheckFunctionSignatures
router.put("/", accessControl, (req, res, next) =>{
    const id = parseInt(req.get("id"));
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

