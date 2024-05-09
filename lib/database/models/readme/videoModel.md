# Video Model
This markdown document explains the creation of a Mongoose model for an `'Video'` in a MongoDB collection. It starts with the definition of an `IVideo` interface in TypeScript, which outlines the expected properties of an Video document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named `'Video'` has already been defined, and if not, it defines a new one using the `VideoSchema`. This ensures the `'Video'` model is defined only once to avoid errors.

# Table of Contents
- [Define the Video interface](#define-the-Video-interface)
- [Define the Video schema](#define-the-Video-schema)
- [Define the Video model/constructor](#define-the-Video-modelconstructor)

# [Define the Video interface](../video.model.ts)

Define a contract for a certain structure of an object. Here, `IVideo` is expected to have properties `title`, `description`, `url`, `tags`, `createdAt`, and `updatedAt`.

* `title`, `description`, and `url` are of type `string`.
* `tags` is an array of strings (`string[]`).
* `createdAt` and `updatedAt` are of type `Date`.

The `extends Document` part means that `IVideo` inherits all properties and methods from the `Document` interface. This is commonly used in Mongoose schemas, where Document represents a MongoDB document and includes common properties like `_id`.

So, an object of type `IVideo` will have all the properties of a MongoDB document, plus the additional properties defined in the `IVideo` interface.

<details>
<summary><strong>Click to See the Video!</strong></summary>

```typescript
export interface IVideo extends Document
{
    title: string;
    description: string;
    url: string;
    tags: string[];
}
```
</details>
</br>

# [Define the Video schema](../video.model.ts)

Defining Mongoose schema named `VideoSchema`. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's what each line is doing:

* `title: { type: String, required: true }`: This line is defining a field named `title` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `description: { type: String, required: true }`: This line is defining a field named `description` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `url: { type: String, required: true }`: This line is defining a field named `url` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `tags: { type: [ String ] }`: This line is defining a field named `tags` in the schema that is an array of strings. This field is not marked as required, so it's optional.

So, an object of type VideoSchema will have all the properties defined in the schema.

<details>
<summary><strong>Click to See the Video!</strong></summary>

```typescript
const VideoSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    tags: { type: [ String ] },
} );

```
</details>
</br>

# [Define the Video model/constructor](../video.model.ts)
Checking if a Mongoose model named 'Video' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `VideoSchema` and assigns it to the `Video` constant.

Here's a breakdown:

* `models?.Video` uses optional chaining (`?.`) to safely access the `Video` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("Video", VideoSchema)` defines a new Mongoose model named "Video" using the `VideoSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your Video might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the Video!</strong></summary>

```typescript
const Video = models?.Video || model( 'Video', VideoSchema );

```
</details>
</br>
