
![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=plastic) 
![Mongoose Badge](https://img.shields.io/badge/Mongoose-F04D35?logo=mongoosedotws&logoColor=fff&style=plastic)

# Table of Contents
- [Load environment variables](#load-environment-variables)
- [Define the connection](#define-the-connection)
- [Cache the connection](#cache-the-connection)
- [Check if the connection is already established](#check-if-the-connection-is-already-established)
- [Connect to the database](#connect-to-the-database)

# [Load environment variables](mongoose.ts)

Loading environment variables into constants for use within the application.
1. `const MONGO_URI = process.env.MONGO_URI;:` This line is creating a constant named `MONGO_URI` and assigning it the value of the `MONGO_URI` environment variable. This environment variable is typically used to store the URI (Uniform Resource Identifier) of MongoDB database.

2. `const MONGO_DB_NAME = process.env.MONGO_DB_NAME;:` This line is creating a constant named `MONGO_DB_NAME` and assigning it the value of the `MONGO_DB_NAME` environment variable. This environment variable is typically used to store the name of  MongoDB database.

`process.env` is a global variable injected by Node.js, and it represents the state of the system environment application is in when it starts. For example, if the system has a `MONGO_URI` environment variable set,  can access it via `process.env.MONGO_URI` in  Node.js code.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
```
</details>
</br>

# [Define the connection](mongoose.ts)

An interface in TypeScript is a way to define a contract for a certain structure of an object. This interface is saying that any object that is a MongooseConnection must have the following properties:

- `conn:` This property can either be an instance of Mongoose or null. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward, schema-based solution to model application data.
- `promise:` This property can either be a Promise that resolves to an instance of Mongoose or null. A Promise is an object representing the eventual completion or failure of an asynchronous operation.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
interface MongooseConnection
{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null; 
}
```
</details>
</br>

# [Cache the connection](mongoose.ts)
It's declaring a variable named cached of type MongooseConnection (which was defined in previous code snippet).
It's assigning to cached the mongoose property from the global object.
The global object in Node.js is a global namespace object. In other words, all global variables are methods and properties of the global object.
The (global as any) part is a type assertion in TypeScript. It's telling the TypeScript compiler to treat global as an any type. The any type is a 
powerful way to work with existing JavaScript, allowing to opt out of type-checking.
So, (global as any).mongoose is accessing the mongoose property of the global object without TypeScript trying to type-check it.
<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
let cached: MongooseConnection = ( global as any ).mongoose;
```
</details>
</br>

# [Check if the connection is already established](mongoose.ts)
if the cached variable is falsy (i.e., it's null, undefined, NaN, 0, "", or false). If cached is falsy, it then initializes both cached and the mongoose property of the global object to an object with conn and promise properties set to null.

Here's a step-by-step breakdown:

1. `if (!cached)`: This checks if cached is falsy. If cached has not been assigned a value or is null, this condition will be true.

2. `cached = (global as any).mongoose = { conn: null, promise: null };`: If the condition is true, this line is executed. It does three things:

- It creates an object with conn and promise properties, both set to null.

- It assigns this object to the mongoose property of the global object. The (global as any) part is a type assertion in TypeScript, telling the TypeScript compiler to treat global as an any type, which allows to access any property of it without TypeScript trying to type-check it.

- It also assigns this object to the cached variable.

The purpose of this code is to initialize the cached variable and the mongoose property of the global object if cached has not been initialized yet. This is typically done to cache a Mongoose connection in a global variable so it can be reused across multiple function calls or files, improving performance by reusing existing database connections instead of creating new ones every time. However, in this case, it's just initializing the variables to null values; the actual Mongoose connection would presumably be set up later in the code.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
if ( !cached )
{
    cached = ( global as any ).mongoose = { conn: null, promise: null };
}
```
</details>
</br>

# [Connect to the database](mongoose.ts)
Asynchronous function named connectToDatabase that is used to establish a connection to a MongoDB database using Mongoose. Here's a step-by-step breakdown:

1. `if (cached.conn)`: This checks if `cached.conn` is truthy. If `cached.conn` has been assigned a value (presumably a Mongoose connection), this condition will be `true`. If it's `true`, the function returns the cached connection, effectively reusing the existing connection instead of creating a new one.

2. `if (!MONGO_URI) throw new Error('Mongo URI is missing');`: This checks if `MONGO_URI` is falsy. `MONGO_URI` is presumably a string containing the URI of MongoDB database. If `MONGO_URI` is not set (i.e., it's `null`, `undefined`, `NaN`, `0`, `""`, or `false`), an error is thrown indicating that the Mongo URI is missing.

3. `cached.promise = cached.promise || mongoose.connect(MONGO_URI, { dbName: MONGO_DB_NAME, bufferCommands: false });`: This line is executed if `cached.conn` is falsy and `MONGO_URI` is truthy. It checks if `cached.promise` is truthy. If it is, `cached.promise` is left as is. If it's not, `mongoose.connect` is called to establish a new connection to the MongoDB database, and the returned promise is assigned to cached.promise. The mongoose.connect function is called with two arguments: `MONGO_URI` and an options object. The options object sets the database name to `MONGO_DB_NAME` and disables the buffering of commands (`bufferCommands: false`).

4. `cached.conn = await cached.promise;`: This line waits for the promise stored in `cached.promise` to resolve, then assigns the resolved value to `cached.conn`. If cached.promise was a promise returned by `mongoose.connect`, `cached.conn` will be a Mongoose connection to the MongoDB database.

5. `return cached.conn;`: This line returns the Mongoose connection stored in `cached.conn`.

The purpose of this function is to establish a connection to a MongoDB database using Mongoose, with the ability to reuse an existing connection if one is available. This can help improve performance by reusing existing database connections instead of creating new ones every time the function is called.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
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
```
<details>
</br>
