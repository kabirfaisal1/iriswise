import { model, models, Schema } from "mongoose";

// Define the ArticleSummarize interface
export interface IArticleSummarize extends Document
{
    id: number;
    title: string;
    content: string;
    summary: string;

}

// Define the ArticleSummarize schema
const ArticleSummarizeSchema = new Schema( {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String, required: true },
} );

// Define the ArticleSummarize model/constructor
const ArticleSummarize = models?.ArticleSummarize || model( 'ArticleSummarize', ArticleSummarizeSchema );

export default ArticleSummarize;
