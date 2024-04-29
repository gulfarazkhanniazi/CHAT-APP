const express = require('express');
const getUserId = require("../middleware/getUserId");
const conversationModel = require("../models/connectionModel");
const Message = require("../models/messageModel")

const router = express.Router();

router.post("/send/:id", getUserId, async (req, res) => {
    try {
        const { message } = req.body;
        const receiverId = req.params.id; // Corrected: Use receiverId instead of receiverid
        const senderId = req.userId; // Corrected: Use senderId instead of senderid

        let response = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] } // Corrected: Use $all instead of &
        });
        
        if (!response) {
            response = await conversationModel.create({
                participants: [senderId, receiverId] // Corrected: Use senderId and receiverId
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            response.messages.push(newMessage._id);
            // await newMessage.save();
            // await response.save();
            await Promise.all([await newMessage.save(), await response.save()])
        }

        res.status(201).send(newMessage);
    } catch (error) {
        console.log("Server Error:", error);
        res.status(500).send({ error: "Server Error" });
    }
});

router.get("/:id", getUserId, async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.userId;

        const response = await conversationModel.findOne({ participants: { $all: [senderId, receiverId] } })
        .populate("messages")

        const messages = response.messages;
        res.status(200).send(messages)
    } catch (error) {
        console.log("Server Error:", error);
        res.status(500).send({ error: "Server Error" });
    }
});

module.exports = router;