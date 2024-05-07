import mongoose, { Mongoose } from 'mongoose';


// Load environment variables
const MONGO_URI = process.env.MONGO_URI;
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
    cached = ( global as any ).mongoose = { conn: null, promise: null };
}

// Connect to the database
export const connectToDatabase = async () =>
{
    if ( cached.conn )
    {
        return cached.conn;
    }

    if ( !MONGO_URI ) throw new Error( 'Mongo URI is missing' );

    cached.promise = cached.promise || mongoose.connect( MONGO_URI, {
        dbName: MONGO_DB_NAME, bufferCommands: false
    } );

    cached.conn = await cached.promise;

    return cached.conn;
};
