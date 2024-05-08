# Transaction Model
This markdown document explains the creation of a Mongoose model for an 'Transaction' in a MongoDB collection. It starts with the definition of an ITransaction interface in TypeScript, which outlines the expected properties of an Transaction document. Then, it describes the creation of a Mongoose schema that maps to the MongoDB collection and defines the shape of the documents. Finally, it checks if a Mongoose model named 'Transaction' has already been defined, and if not, it defines a new one using the TransactionSchema. This ensures the 'Transaction' model is defined only once to avoid errors.

# Table of Contents
- [Define the Transaction interface](#define-the-transaction-interface)
- [Define the Transaction schema](#define-the-transaction-schema)
- [Define the Transaction model/constructor](#define-the-transaction-modelconstructor)

# [Define the Transaction interface](../Transaction.model.ts)

In this interface:

* `stripeId` and `amount` are required and must be of type `string` and `number` respectively.
* `createdAt`, `plan`, `credits`, and `buyer` are optional. If provided, `createdAt` must be of type `Date`, `plan` must be of type `string`, `credits` must be of type `number`, and `buyer` must be of type `ObjectId` from Mongoose's `Types`.

The ITransaction interface extends the Document interface from Mongoose, which provides built-in properties and methods for MongoDB documents.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
interface ITransaction extends Document {
    createdAt?: Date;
    stripeId: string;
    amount: number;
    plan?: string;
    credits?: number;
    buyer?: Types.ObjectId;
}
```
</details>
</br>

# [Define the Transaction schema](../Transaction.model.ts)

Defining Mongoose schema for a MongoDB collection. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. A schema in Mongoose is a structure that defines the shape of the documents within a MongoDB collection.

Here's a breakdown of what each line does:

* `createdAt` is a field of type `Date` with a default value of the current date and time.
* `stripeId` is a field of type `String`. It is required and must be unique.
* `amount` is a field of type `Number` and is required.
* `plan` and `credits` are fields of type `String` and `Number` respectively, but they are not required.
* `buyer` is a field that references another MongoDB document. It's of type `ObjectId` (a special type used by MongoDB for unique document IDs) and it references documents in the "User" collection.

This schema can be used to create a Mongoose model, which can then be used to create, read, update, and delete documents in the MongoDB collection. The documents in this collection would represent transactions, with details like when the transaction was created, the Stripe ID of the transaction, the amount of the transaction, the plan associated with the transaction, the number of credits involved in the transaction, and the buyer who made the transaction.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
```
</details>
</br>

# [Define the Transaction model/constructor](../Transaction.model.ts)
Checking if a Mongoose model named 'Transaction' has already been defined. If it has, it uses the existing model. If it hasn't, it defines a new model using the `TransactionSchema` and assigns it to the `Transaction` constant.

Here's a breakdown:

* `models?.Transaction` uses optional chaining (`?.`) to safely access the `Transaction` property of models. If `models` is `undefined` or `null`, this expression will evaluate to `undefined` instead of throwing an error.
* `||` is the logical OR operator. If the expression on its left is falsy (i.e., `undefined`, `null`, `false`, `0`, `NaN`, or an empty string), it evaluates the expression on its right.
* `model("Transaction", TransactionSchema)` defines a new Mongoose model named "Transaction" using the `TransactionSchema`.

This pattern is useful to avoid overwriting a model that has already been defined, especially in situations where your code might be run multiple times, such as in serverless environments or during testing.

<details>
<summary><strong>Click to See the code!</strong></summary>

```typescript
const Transaction = models?.Transaction || model( "Transaction", TransactionSchema );
```
</details>
</br>
