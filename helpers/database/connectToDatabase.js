const mongoose = require("mongoose");

const connectToDatabase = () =>{
    console.log("?")
    mongoose.connect(process.env.MONGO_URI,
        {useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true})
        .then(() => {
            console.log("MongoDB Connection Is Successful")
        })
        .catch(err => {
            console.log("wow")
            console.log(err)
        })
};

module.exports = connectToDatabase;

