const express = require('express');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require('../models/userModel');
const tokenGenerator = require("../utils/generateToken")

const router = express.Router()

router.post("/signup", async(req, res)=>{
    try {
        const { fullname, username, password, confirmpasssword, gender } = req.body;

        if (password !== confirmpasssword)
            return res.status(400).send({error: "Password Not Match"})

        const response = await userModel.findOne({username})

        if (response)
            return res.status(400).send({error: "User Already Exist"})

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const hashPass = await bcrypt.hash(password, 30);

        const user = new userModel({
            fullname: fullname,
            username: username,
            password: hashPass,
            gender: gender,
            profilepic: gender === "male"? boyProfile : girlProfile
        })

        tokenGenerator(user._id, res);
        const result = await user.save()
        return res.status(201).send(result)

    } catch (error) {
        res.status(500).send("Server Error");
        console.log("server Error");
    }
})

router.post("/login", async(req, res)=>{
    try {
        const { username, password } = req.body;

        const user = await userModel.findOne({username});

        const verifyUser = await bcrypt.compare(password, user?user.password: "");

        if (!user || !verifyUser)
            return res.status(404).send("Invalid UserNameor Password");

        tokenGenerator(user._id, res);

        res.status(201).send(user);

    } catch (error) {
        res.status(500).send("Server Error");
        console.log("server Error");
    }
})

router.post("/logout", (req, res)=>{
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).send({message: "Logout Succesfully"})
    } catch (error) {
        res.status(500).send({error: "Server Error"});
        console.log("server Error");
    }
})

module.exports = router;