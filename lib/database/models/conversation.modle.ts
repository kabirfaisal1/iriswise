import { model, models, Schema } from "mongoose";
import { ObjectId } from 'mongodb';

// Define the Message interface
export interface IMessage
{
    sender: ObjectId;
    content: string;
    timestamp: Date;
}

// Define the Conversation interface
export interface IConversation
{
    participants: ObjectId[];
    messages: IMessage[];
    createdAt: Date;
}

// Define the Conversation schema
const ConversationSchema = new Schema( {
    participants: [ { type: Schema.Types.ObjectId, ref: 'User', required: true } ],
    messages: [
        {
            sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ],
    createdAt: { type: Date, default: Date.now },
} );

// Define the Conversation model/constructor
const Conversation = models?.Conversation || model( 'Conversation', ConversationSchema );

export default Conversation;
