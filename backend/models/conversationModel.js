import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [
      {
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        message: { type: String, required: true },
        sentAt: { type: Date, default: Date.now },
        isRead: { type: Boolean, default: false },
      },
    ],
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  },
  { timestamps: true }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;
