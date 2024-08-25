import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if(!conversation){
        conversation = await Conversation.create({
            participants : [senderId, receiverId]
        })
    }

    const newMessage = await Message({
        senderId,
        receiverId,
        message
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    // SOCKET IO FUNCTIONS

    // this will run in parallel means the both collection will save at the same time in the database
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).send(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller", error.message);
    res.status(500).json({ error: "Intarnal server error" });
  }
};
// get message between two users
export const getMessage = async (req, res)=>{
  try {
    const {id:userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {$all : [senderId, userToChatId]}
    }).populate('messages') //not reference but actual messages

    if(!conversation){
      return res.status(200).json([])
    }
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessage controller", error.message);
    res.status(500).json({ error: "Intarnal server error" });
  }
}