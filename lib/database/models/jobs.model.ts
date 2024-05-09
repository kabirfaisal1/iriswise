import { model, models, Schema } from "mongoose";

// Define the Jobs interface
export interface IJobs extends Document
{
    title: string;
    description: string;
    company: string;
    location: Location; // Change the type of 'location' property to 'Location'
    salary?: number;
    requirements: string[];
    benefits: string[];
    contactEmail?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Define the Jobs schema
const JobsSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    requirements: { type: [ String ], required: true },
    benefits: { type: [ String ], required: true },
    contactEmail: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
} );

// Define the Jobs model/constructor
const Jobs = models?.Jobs || model( 'Jobs', JobsSchema );

export default Jobs;
