const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, "You have to provide a name!"]
    },
    email:{
        type: String,
        required: [true,"You have to provide an email!"],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "You have to provide a valid email!"
        ]
    },
    password:{
        type: String,
        minlength: [6,"Password length should be at least 6!"],
        required: [true, "You have to provide a password!"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
UserSchema.methods.generateJswFromUser = function (){
    const {JWT_SECRET_KEY, JWT_EXPIRE} = process.env;
    const payload = {
        id: this._id,
        name: this.name
    }
    return jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE
    });
}
// change this
UserSchema.pre("save", function(next){
    if(this.isModified("password")){
        bcrypt.genSalt(5, (err, salt) => {
            if (err) next(err);
            bcrypt.hash(this.password, salt,(err, hash) => {
                if (err) next(err);
                this.password = hash;
                next();
            });
        });
    }
    else{
        next();
    }
});

module.exports = mongoose.model("User", UserSchema);