# Code Model
This markdown document explains the creation of a Mongoose model for an `'Code'` in a MongoDB collection. It starts with the definition of an `ICode` interface in TypeScript, which outlines the expected properties of an Code document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named `'Code'` has already been defined, and if not, it defines a new one using the `CodeSchema`. This ensures the `'Code'` model is defined only once to avoid errors.

# Table of Contents
- [Define the Code interface](#define-the-code-interface)
- [Define the Code schema](#define-the-code-schema)
- [Define the Code model/constructor](#define-the-code-modelconstructor)

# [Define the Code interface](../code.model.ts)

ICode is expected to have properties `title`, `codeSnippet`, `language`, and `tags`.

* `title`, `codeSnippet`, and `language` are all of type `string`.
* `tags` is an array of strings (`string[]`).

The `extends Document` part means that `ICode` inherits all properties and methods from the `Document` interface. This is commonly used in Mongoose schemas, where `Document` represents a MongoDB document and includes common properties like `_id`.

So, an object of type `ICode` will have all the properties of a MongoDB document, plus the additional properties defined in the `ICode` interface.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
export interface ICode extends Document
{
    title: string;
    codeSnippet: string;
    language: string;
    tags: string[];
}

```
</details>
</br>

# [Define the Code schema](../code.model.ts)

Defining Mongoose schema named `CodeSchema`. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's what each line is doing:

* `title: { type: String, required: true }`: This line is defining a field named `title` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `codeSnippet: { type: String, required: true }`: This line is defining a field named `codeSnippet` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `language: { type: String, required: true }`: This line is defining a field named `language` in the schema that is of type `String` and is required. This means every document in the collection must have this field and its value must be a string.

* `tags: { type: [ String ] }`: This line is defining a field named `tags` in the schema that is an array of strings. This field is not required, so a document in the collection could potentially not have this field. If it does have this field, the value must be an array where each element is a string.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const CodeSchema = new Schema( {
    title: { type: String, required: true },
    codeSnippet: { type: String, required: true },
    language: { type: String, required: true },
    tags: { type: [ String ] },
} );
```
</details>
</br>

# [Define the Code model/constructor](../code.model.ts)
Checking if a Mongoose model named 'Code' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `CodeSchema` and assigns it to the `Code` constant.

Here's a breakdown:

* `models?.Code` uses optional chaining (`?.`) to safely access the `Code` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("Code", CodeSchema)` defines a new Mongoose model named "Code" using the `CodeSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your code might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const Code = models?.Code || model( 'Code', CodeSchema );
```
</details>
</br>
