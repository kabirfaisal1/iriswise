# Image Model
This markdown document explains the creation of a Mongoose model for an 'Image' in a MongoDB collection. It starts with the definition of an IImage interface in TypeScript, which outlines the expected properties of an image document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named 'Image' has already been defined, and if not, it defines a new one using the ImageSchema. This ensures the 'Image' model is defined only once to avoid errors.

# Table of Contents
- [Define the Image interface](#define-the-image-interface)
- [Define the Image schema](#define-the-image-schema)
- [Define the Image model/constructor](#define-the-image-modelconstructor)

# [Define the Image interface](../image.model.ts)

This is an interface in TypeScript is a way of defining a contract for a certain structure of an object. In this case, `IImage` is expected to have properties like `title`, `transformation`, `publicID`, `secureUrl`, etc.

The `extends Document` part means that `IImage` inherits all properties and methods from the `Document` interface, which is a part of Mongoose (a MongoDB object modeling tool). This is typically used when defining models for MongoDB documents.

The `?` after some property names indicates that these properties are optional. For example, `width?: number;` means that the `width` property is not required to create an object of this interface.

The `author` property is an object itself with properties like `_id`, `firstName`, `lastName`, `email`, and `userId`. The `_id` is of type `Schema.Types.ObjectId`, which is a special type used by MongoDB for unique identifiers.

The `createdAt` and `updatedAt` properties are of type `Date` and are optional. These are typically used for tracking when a document was created or last updated.
<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
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
```
</details>
</br>

# [Define the Image schema](../image.model.ts)
Defining a Mongoose schema for a MongoDB collection.

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection. It maps to a MongoDB collection and defines the shape of the documents within that collection.

Here's a breakdown of what each line does:

* title, transformation, publicID, and secureUrl are required fields of type String and URL.
* width and height are optional fields of type Number.
* config is an optional field of type Object.
* transformationURL is an optional field of type URL.
* aspectRatio, color, and prompt are optional fields of type String.
* author is a field that references a User document. Its type is Schema.Types.ObjectId, which is the type for unique document identifiers in MongoDB.
* createdAt and updatedAt are fields of type Date. They have default values of the current date and time (Date.now).

This schema can be used to create a Mongoose model, which can then be used to create, read, update, and delete documents in the MongoDB collection.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformation: { type: String, required: true },
    publicID: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object},
    transformationURL: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
```
</details>
</br>

# [Define the Image model/constructor](../image.model.ts)
Checking if a Mongoose model named 'Image' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the ImageSchema.

Here's a breakdown:

* models?.Image uses optional chaining to access the 'Image' property of models. If models is null or undefined, this expression will evaluate to undefined rather than throwing an error.
* || is the logical OR operator. If the left-hand side is truthy (i.e., exists), it will be returned. Otherwise, the right-hand side will be returned.
* model('Image', ImageSchema) defines a new Mongoose model named 'Image' using the ImageSchema.

So, in short, this line of code ensures that the 'Image' model is defined exactly once. This is important because Mongoose throws an error if you try to define a model with the same name more than once.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const Image = models?.Image || model('Image', ImageSchema);
```
</details>
</br>
