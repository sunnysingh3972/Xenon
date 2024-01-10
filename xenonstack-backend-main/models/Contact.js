import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    subject:{type:String, required:true, trim:true},
    message:{type:String, required:true, trim:true}
})

const messageModel = mongoose.model("message", messageSchema);
export default messageModel;