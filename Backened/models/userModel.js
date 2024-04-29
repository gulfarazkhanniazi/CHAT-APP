const mongoose = require("mongoose");
const { type } = require("os");

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

module.exports = mongoose.model("user", userSchema);