const express = require("express");

const app = express();

const PORT = 5000;

app.get("/get",(req,res,next) =>
{
    res.json({"a": "bc"})
})

app.post("/post",(req,res,next) =>
{
    res.json({"a": "bpostc"})
})

app.listen(PORT, () => {
    console.log("Server Started At : " + PORT);
})