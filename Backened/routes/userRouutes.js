const express = require('express');
const getUserId = require("../middleware/getUserId");
const User = require("../models/userModel");
// const conversationModel = require("../models/connectionModel");
// const Message = require("../models/messageModel")

const router = express.Router();

router.get("/", getUserId, async(req, res) => {
    try {
        const logedInUser = req.UserId;

        const users = await User.find({_id: { $ne: logedInUser}}).select("-password")

        res.status(200).send(User);
    } catch (error) {
        console.log("Server Error:", error);
        res.status(500).send({ error: "Server Error" });
    }
})
module.exports = router;