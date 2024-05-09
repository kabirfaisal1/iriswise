# ArticleSummarize Model
This markdown document explains the creation of a Mongoose model for an `'ArticleSummarize'` in a MongoDB collection. It starts with the definition of an `IArticleSummarize` interface in TypeScript, which outlines the expected properties of an ArticleSummarize document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named `'ArticleSummarize'` has already been defined, and if not, it defines a new one using the `ArticleSummarizeSchema`. This ensures the `'ArticleSummarize'` model is defined only once to avoid errors.

# Table of Contents
- [Define the ArticleSummarize interface](#define-the-ArticleSummarize-interface)
- [Define the ArticleSummarize schema](#define-the-ArticleSummarize-schema)
- [Define the ArticleSummarize model/constructor](#define-the-ArticleSummarize-modelconstructor)

# [Define the ArticleSummarize interface](../articleSummarize.model.ts)

IArticleSummarize is expected to have properties `id`, `title`, `content`, `summary`, `createdAt`, and `updatedAt`.

* `id` is of type `number`.
* `title`, `content`, and `summary` are of type `String`.

The `extends Document` part means that `ArticleSummarize` inherits all properties and methods from the `Document` interface. This is commonly used in Mongoose schemas, where `Document` represents a MongoDB document and includes common properties like `_id`.

So, an object of type `ArticleSummarize` will have all the properties of a MongoDB document, plus the additional properties defined in the `ArticleSummarize` interface.

<details>
<summary><strong>Click to See the ArticleSummarize!</strong></summary>

```typescript
export interface IArticleSummarize extends Document
{
    id: number;
    title: string;
    content: string;
    summary: string;
}

```
</details>
</br>

# [Define the ArticleSummarize schema](../articleSummarize.model.ts)

Defining Mongoose schema named `ArticleSummarizeSchema`. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's what each line is doing:

* `id: { type: Number, required: true }`: This line is defining a field named `id` in the schema that is of type `Number` and is required. This means every document in the collection must have this field and its value must be a number.

* `title: { type: String, required: true }`: This line is defining a field named `title` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `content: { type: String, required: true }`: This line is defining a field named `content` in the schema that is of type String and is required. This means every document in the collection must have this field and its value must be a string.

* `summary: { type: String, required: true }`: This line is defining a field named `summary` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

So, an object of type `ArticleSummarizeSchema` will have all the properties defined in the schema.

<details>
<summary><strong>Click to See the ArticleSummarize!</strong></summary>

```typescript
const ArticleSummarizeSchema = new Schema( {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String, required: true },
} );
```
</details>
</br>

# [Define the ArticleSummarize model/constructor](../articleSummarize.model.ts)
Checking if a Mongoose model named 'ArticleSummarize' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `ArticleSummarizeSchema` and assigns it to the `ArticleSummarize` constant.

Here's a breakdown:

* `models?.ArticleSummarize` uses optional chaining (`?.`) to safely access the `ArticleSummarize` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("ArticleSummarize", ArticleSummarizeSchema)` defines a new Mongoose model named "ArticleSummarize" using the `ArticleSummarizeSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your ArticleSummarize might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the ArticleSummarize!</strong></summary>

```typescript
const ArticleSummarize = models?.ArticleSummarize || model( 'ArticleSummarize', ArticleSummarizeSchema );
```
</details>
</br>
