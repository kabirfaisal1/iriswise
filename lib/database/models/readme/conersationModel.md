# Conversation Model
This markdown document explains the creation of a Mongoose model for an `'Conversation'` in a MongoDB collection. It starts with the definition of an `IConversation` interface in TypeScript, which outlines the expected properties of an Conversation document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named `'Conversation'` has already been defined, and if not, it defines a new one using the `ConversationSchema`. This ensures the `'Conversation'` model is defined only once to avoid errors.

# Table of Contents
- [Define the Conversation interface](#define-the-conversation-interface)
- [Define the Conversation schema](#define-the-conversation-schema)
- [Define the Conversation model/constructor](#define-the-conversation-modelconstructor)

# [Define the Conversation interface](../conversation.model.ts)

Defining two interfaces: `IMessage` and `IConversation`.

1. `IMessage:` This interface represents a message in a conversation. It has three properties:

    * `sender:` This is an `ObjectId`, which is typically used as the unique identifier for a user in MongoDB.
    * `content:` This is a `String` that represents the content of the message.
    * `timestamp:` This is a `Date` object that represents when the message was sent.
2. `IConversation:` This interface represents a conversation. It has three properties:

    * `participants`: This is an array of `ObjectIds`, each representing a user participating in the conversation.
    * `messages`: This is an array of `IMessage` objects, each representing a message in the conversation.
    * `createdAt`: This is a `Date` object that represents when the conversation was created.

The `export` keyword means that these interfaces are being exported from the module, so they can be imported and used in other modules.

<details>
<summary><strong>Click to See the Conversation!</strong></summary>

```typescript
// Define the Message interface
export interface IMessage
{
    sender: ObjectId;
    content: string;
    timestamp: Date;
}

// Define the Conversation interface
export interface IConversation
{
    participants: ObjectId[];
    messages: IMessage[];
    createdAt: Date;
}
```
</details>
</br>

# [Define the Conversation schema](../conversation.model.ts)

Defining Mongoose schema named `ConversationSchema`. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's what each line is doing:

* `participants: [ { type: Schema.Types.ObjectId, ref: 'User', required: true } ]`: This line is defining a field named `participants` in the schema that is an array of ObjectIds, each representing a user participating in the conversation. The `ref: 'User'` part indicates that these IDs reference documents in the 'User' collection.

* `messages: [ ... ]`: This line is defining a field named `messages` in the schema that is an array of subdocuments, each representing a message in the conversation. Each message has the following fields:

    * `sender: { type: Schema.Types.ObjectId, ref: 'User', required: true }`: This field represents the sender of the message. It is an ObjectId that references a document in the 'User' collection.
    * `content: { type: String, required: true }`: This field represents the content of the message. It is a string.
    * `timestamp: { type: Date, default: Date.now }`: This field represents when the message was sent. It is a date, and if not provided, it will default to the current date and time.
* `createdAt: { type: Date, default: Date.now }`: This line is defining a field named `createdAt` in the schema that represents when the conversation was created. It is a date, and if not provided, it will default to the current date and time.

<details>
<summary><strong>Click to See the Conversation!</strong></summary>

```typescript
// Define the Conversation schema
const ConversationSchema = new Schema( {
    participants: [ { type: Schema.Types.ObjectId, ref: 'User', required: true } ],
    messages: [
        {
            sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ],
    createdAt: { type: Date, default: Date.now },
} );

```
</details>
</br>

# [Define the Conversation model/constructor](../conversation.model.ts)
Checking if a Mongoose model named 'Conversation' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `ConversationSchema` and assigns it to the `Conversation` constant.

Here's a breakdown:

* `models?.Conversation` uses optional chaining (`?.`) to safely access the `Conversation` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("Conversation", ConversationSchema)` defines a new Mongoose model named "Conversation" using the `ConversationSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your Conversation might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the Conversation!</strong></summary>

```typescript
const Conversation = models?.Conversation || model( 'Conversation', ConversationSchema );

```
</details>
</br>
