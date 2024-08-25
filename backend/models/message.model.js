import mongoose from "mongoose";

// creating message schema. this will be a realitional database connection
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, {timestamps: true}); // timestamps fields will create createdAt and updatedAt fields in the database

const Message = mongoose.model("Message", messageSchema);

export default Message;