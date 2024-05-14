import mongoose, { Mongoose } from 'mongoose';


// Load environment variables
const MONGODB_URL = process.env.MONGODB_URL;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

// Define the connection
interface MongooseConnection
{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Cache the connection
let cached: MongooseConnection = ( global as any ).mongoose;

// Check if the connection is already established
if ( !cached )
{
    cached = ( global as any ).mongoose = {
        conn: null, promise: null
    };
}

// Connect to the database
export const connectToDatabase = async () =>
{
    if ( cached.conn ) return cached.conn;
    if ( !MONGODB_URL ) throw new Error( `Missing MONGODB_URL ${MONGODB_URL}`, );

    cached.promise =
        cached.promise ||
        mongoose.connect( MONGODB_URL, {
            dbName: MONGO_DB_NAME, bufferCommands: false
        } );

    cached.conn = await cached.promise;

    return cached.conn;
};
