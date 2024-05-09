import { Schema, model, models, Types } from "mongoose";

// Interface for the Transaction model
export interface ITransaction extends Document
{
    createdAt?: Date;
    stripeId: string;
    amount: number;
    plan?: string;
    credits?: number;
    buyer?: Types.ObjectId;
}

// Transaction schema
const TransactionSchema = new Schema( {
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    plan: {
        type: String,
    },
    credits: {
        type: Number,
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
} );

// Transaction model/constructor
const Transaction = models?.Transaction || model( "Transaction", TransactionSchema );

export default Transaction;
