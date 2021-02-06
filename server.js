const {accessControl} = require("./middleware")
const express = require("express");
const app = express();
const PORT = 5000;
let {users} = require("./data/users");

app.use(express.json());


// noinspection JSCheckFunctionSignatures
app.get("/get", accessControl, (req,res,next) =>
{
    res.json({"this": "is a get request"})
})

// noinspection JSCheckFunctionSignatures
app.post("/post", accessControl,(req,res,next) =>
{
    res.json({"this": "is a post request"})
})

let i = 0 ;
// noinspection JSCheckFunctionSignatures
app.put("/put", accessControl, (req, res, next) =>{
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

app.listen(PORT, () => {
    console.log("Server Started At : " + PORT);
})
