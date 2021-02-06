const dotenv = require("dotenv")
dotenv.config({
    path: "./config/env/config.env"
});
const getR = require("./routers/simpleGet");
const putR = require("./routers/simplePut");
const postR = require("./routers/simplePost");

const express = require("express");
const app = express();

app.use("/get", getR);
app.use("/post", postR);
app.use("/put", putR);

app.listen(process.env.PORT, () => {
    console.log("Server Started At : " + process.env.PORT);
})
