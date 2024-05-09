import { model, models, Schema } from "mongoose";

// Define the Video interface
export interface IVideo extends Document
{
    title: string;
    description: string;
    url: string;
    tags: string[];
}

// Define the Video schema
const VideoSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    tags: { type: [ String ] },
} );

// Define the Video model/constructor
const Video = models?.Video || model( 'Video', VideoSchema );

export default Video;
