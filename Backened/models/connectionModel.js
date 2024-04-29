const mongoose = require("mongoose");

const model = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message"
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("conversation", model); // Corrected: Changed the model name to "conversation"
