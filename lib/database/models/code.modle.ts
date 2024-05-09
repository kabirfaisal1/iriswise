import { model, models, Schema } from "mongoose";

// Define the Code interface
export interface ICode extends Document
{
    title: string;
    codeSnippet: string;
    language: string;
    tags: string[];
}

// Define the Code schema
const CodeSchema = new Schema( {
    title: { type: String, required: true },
    codeSnippet: { type: String, required: true },
    language: { type: String, required: true },
    tags: { type: [ String ] },
} );

// Define the Code model/constructor
const Code = models?.Code || model( 'Code', CodeSchema );

export default Code;
