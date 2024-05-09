# User Model
This markdown document explains the creation of a Mongoose model for an `'User'` in a MongoDB collection. It starts with the definition of an `IUser` interface in TypeScript, which outlines the expected properties of an User document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named `'User'` has already been defined, and if not, it defines a new one using the `UserSchema`. This ensures the `'User'` model is defined only once to avoid errors.

# Table of Contents
- [Define the User interface](#define-the-user-interface)
- [Define the User schema](#define-the-user-schema)
- [Define the User model/constructor](#define-the-user-modelconstructor)

# [Define the User interface](../user.model.ts)

In this interface:

* `clerkId`, `email`, and username are required and must be of type `string`.
* `photo`, `firstName`, `lastName`, and `planId` are optional and if provided, must be of type `string`.
* `creditBalance` is optional and if provided, must be of type `number`.

The `IUser` interface extends the `Document` interface from Mongoose, which provides built-in properties and methods for MongoDB documents.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
export interface IUser extends Document
{
    clerkId: string;
    email: string;
    username?: string;
    photo?: string;
    firstName?: string;
    lastName?: string;
    planId?: string;
    creditBalance?: number;
}
```
</details>
</br>

# [Define the User schema](../user.model.ts)
Defining a Mongoose schema for a MongoDB collection. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's a breakdown of what each line does:

* `clerkId`, `email`, and `username` are fields of type `String`. `clerkId` and `email` are required and must be unique. `username` must also be unique but it's not required.
`photo`, `firstName`, and `lastName` are fields of type `String` but they are not required and don't have to be unique.
* `planId` is a field of type String with a default value of `1`.
* `creditBalance` is a field of type Number with a default value of `10`.

This schema can be used to create a Mongoose model, which can then be used to create, read, update, and delete documents in the MongoDB collection.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const UserSchema = new Schema( {
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    photo: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    planId: {
        type: String,
        default: 1,
    },
    creditBalance: {
        type: Number,
        default: 10,
    },

} );
```
</details>
</br>

# [Define the User model/constructor](../user.model.ts)
Checking if a Mongoose model named `'User'` has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `UserSchema` and assigns it to the `User` constant.

Here's a breakdown:

* `models?.User` uses optional chaining (`?.`) to safely access the `User` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("User", UserSchema)` defines a new Mongoose model named "User" using the `UserSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your code might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const User = models?.User || model( "User", UserSchema );
```
</details>
</br>
