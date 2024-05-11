const express = require('express');
const fetchUser = require("../middleware/getUserId");
const User = require("../models/userModel");
// const conversationModel = require("../models/connectionModel");
// const Message = require("../models/messageModel")

const router = express.Router();

router.get("/users", fetchUser, async (req, res) => {
    try {
        const loggedInUserId = req.userId;

        // Find the logged-in user
        const loggedInUser = await User.findOne({ _id: loggedInUserId });

        if (!loggedInUser) {
            return res.status(404).send({ error: "User not found" });
        }

        // Find all users except the logged-in user
        const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).send(users);
    } catch (error) {
        console.log("Server Error:", error);
        res.status(500).send({ error: "Server Error" });
    }
});


module.exports = router;