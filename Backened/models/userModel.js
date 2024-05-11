const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname :{
        type: String,
        required: true,
    },
    username :{
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    profilepic : {
        type: String,
        default: ""
    }
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;