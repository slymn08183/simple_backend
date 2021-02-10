const CustomError = require("../../helpers/error/CustomError");

const customErrorHandler = (err,req,res,next) => {

    let customErr = err;

    if(err === SyntaxError){
        customErr = new CustomError("Unexpected Syntax", 400);
    }
    else if(err.code === 11000){
        if(err.keyPattern.hasOwnProperty("email")){
            customErr = new CustomError("This e-mail is already in use!", 400);
        }
        else{
            customErr = new CustomError("Unknown Database Error!", 500)
        }
    }
    // console.log(err)
    res
        .status(customErr.status || 500)
        .json({
            success:false,
            message:customErr.toString() || "Internal Server Error"
        });

}

module.exports = customErrorHandler;