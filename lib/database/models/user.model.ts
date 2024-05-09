
import { model, models, Schema } from "mongoose";

// Define the User interface
export interface IUser extends Document
{
    clerkId: string;
    email: string;
    username?: string;
    photo?: string;
    firstName?: string;
    lastName?: string;
    planId?: string;
    creditBalance?: number;
}


// Define the User schema
const UserSchema = new Schema( {
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    photo: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    planId: {
        type: String,
        default: 1,
    },
    creditBalance: {
        type: Number,
        default: 10,
    },

} );

// Define the User model/constructor
const User = models?.User || model( "User", UserSchema );

export default User;
