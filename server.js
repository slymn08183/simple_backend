const dotenv = require("dotenv")
dotenv.config({
    path: "./config/env/config.env"
});
const getR = require("./routers/simpleGet");
const putR = require("./routers/simplePut");
const postR = require("./routers/simplePost");
const authR = require("./routers/simpleAuth");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const connectToDatabase = require("./helpers/database/connectToDatabase");
const express = require("express");
const app = express();
connectToDatabase();
//express body middleware
app.use(express.json());
app.use("/get", getR);
app.use("/post", postR);
app.use("/put", putR);
app.use("/auth",authR)
app.use(customErrorHandler);
app.listen(process.env.PORT, () => {
    console.log("Server Started At : " + process.env.PORT);
})
