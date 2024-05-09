
import { model, models, Schema } from "mongoose";

// Define the Image interface
export interface IImage extends Document
{
    title: string;
    transformation: string;
    publicID: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationURL?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: Schema.Types.ObjectId;
        firstName?: string;
        lastName?: string;
        email: string;
        userId?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the Image schema
const ImageSchema = new Schema( {
    title: { type: String, required: true },
    transformation: { type: String, required: true },
    publicID: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationURL: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
} );

// Define the Image model/constructor
const Image = models?.Image || model( 'Image', ImageSchema );

export default Image;
