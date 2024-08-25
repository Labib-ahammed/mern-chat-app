import mongoose from "mongoose"

// creating message schema. this will be a realitional database connection

const conversatinSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, {timestamps: true})

const Conversation = mongoose.model('Conversation', conversatinSchema);

export default Conversation;