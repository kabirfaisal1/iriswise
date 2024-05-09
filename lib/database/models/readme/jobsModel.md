# Jobs Model
This markdown document explains the creation of a Mongoose model for an `'Jobs'` in a MongoDB collection. It starts with the definition of an `IJobs` interface in TypeScript, which outlines the expected properties of an Jobs document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named `'Jobs'` has already been defined, and if not, it defines a new one using the `JobsSchema`. This ensures the `'Jobs'` model is defined only once to avoid errors.

# Table of Contents
- [Define the Jobs interface](#define-the-jobs-interface)
- [Define the Jobs schema](#define-the-jobs-schema)
- [Define the Jobs model/constructor](#define-the-jobs-modelconstructor)

# [Define the Jobs interface](../jobs.model.ts)

IJobs is expected to have properties `title`, `description`, `company`, `location`, `salary`, `requirements`, `benefits`, `contactEmail`, `createdAt`, and `updatedAt`.

* `title`, `description`, `company`, and `contactEmail` are all of type `string`.
* `location` is of type `Location`. The comment suggests that the type of `location` should be changed to `Location`, which is presumably a custom type or interface defined elsewhere in your code.
* `salary` is of type `number`, but it's marked as optional (with the `?`) which means it's not required to have this property.
* `requirements` and `benefits` are arrays of strings (`string[]`).
* createdAt and updatedAt are of type Date.

The `extends Document` part means that `IJobs` inherits all properties and methods from the `Document` interface. This is commonly used in Mongoose schemas, where `Document` represents a MongoDB document and includes common properties like `_id`.

So, an object of type `IJobs` will have all the properties of a MongoDB document, plus the additional properties defined in the `IJobs` interface.

<details>
<summary><strong>Click to See the Jobs!</strong></summary>

```typescript
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
```
</details>
</br>

# [Define the Jobs schema](../jobs.model.ts)

Defining Mongoose schema named `JobsSchema`. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's what each line is doing:

* `participants: [ { type: Schema.Types.ObjectId, ref: 'User', required: true } ]`: This line is defining a field named `participants` in the schema that is an array of ObjectIds, each representing a user participating in the Jobs. The `ref: 'User'` part indicates that these IDs reference documents in the 'User' collection.

* `messages: [ ... ]`: This line is defining a field named `messages` in the schema that is an array of subdocuments, each representing a message in the Jobs. Each message has the following fields:

    * `sender: { type: Schema.Types.ObjectId, ref: 'User', required: true }`: This field represents the sender of the message. It is an ObjectId that references a document in the 'User' collection.
    * `content: { type: String, required: true }`: This field represents the content of the message. It is a string.
    * `timestamp: { type: Date, default: Date.now }`: This field represents when the message was sent. It is a date, and if not provided, it will default to the current date and time.
* `createdAt: { type: Date, default: Date.now }`: This line is defining a field named `createdAt` in the schema that represents when the Jobs was created. It is a date, and if not provided, it will default to the current date and time.

<details>
<summary><strong>Click to See the Jobs!</strong></summary>

```typescript
// Define the Jobs schema
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

```
</details>
</br>

# [Define the Jobs model/constructor](../jobs.model.ts)
Checking if a Mongoose model named 'Jobs' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `JobsSchema` and assigns it to the `Jobs` constant.

Here's a breakdown:

* `models?.Jobs` uses optional chaining (`?.`) to safely access the `Jobs` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("Jobs", JobsSchema)` defines a new Mongoose model named "Jobs" using the `JobsSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your Jobs might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the Jobs!</strong></summary>

```typescript
const Jobs = models?.Jobs || model( 'Jobs', JobsSchema );

```
</details>
</br>
