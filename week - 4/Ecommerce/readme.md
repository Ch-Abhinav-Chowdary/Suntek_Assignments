# Ecommerce Backend

This folder contains the week 4 Ecommerce backend project built with Express and MongoDB. The backend provides product and user APIs, including user signup, product creation, cart updates, and user retrieval with populated cart details.

## Backend Overview

- `server.js` is the entry point for the Express server.
- The server connects to MongoDB at `mongodb://localhost:27017/ecommerse`.
- Express middleware parses JSON request bodies using `express.json()`.
- Routes are mounted at `/products-api` and `/users-api`.
- A global error handler returns JSON error responses.

## API Endpoints

### Product API

- `POST /products-api/product`
  - Purpose: Create a new product record in the database.
  - Request body:
    - `productName` (String, required)
    - `price` (Number, required)
    - `brand` (String, required)
  - Response:
    - `200` with `{ message: 'new product created successfully' }`
  - Notes: Saves a new `ProductModel` document.

### User API

- `POST /users-api/users`
  - Purpose: Create a new user account.
  - Request body:
    - `name` (String, required)
    - `email` (String, required, unique)
    - `password` (String, required)
  - Process:
    - Validates the user data.
    - Hashes the password with `bcrypt` using 12 salt rounds.
    - Saves the new `UserModel` document.
  - Response:
    - `200` with `{ message: 'user created succesfull' }`

- `PUT /users-api/user-cart/user-id/:uid/product-id/:pid`
  - Purpose: Add a product to a user's cart or increment quantity if it already exists.
  - Parameters:
    - `:uid` — user ID
    - `:pid` — product ID
  - Process:
    - Verifies that the user exists.
    - Verifies that the product exists.
    - If the product is already in the cart, increments its `quantity` by 1.
    - Otherwise, pushes a new cart item with `quantity: 1`.
  - Response:
    - `200` with `{ message: 'Cart updated successfully', payload: modifiedUser }`

- `GET /users-api/users/:uid`
  - Purpose: Fetch user details by ID and populate the cart products.
  - Parameters:
    - `:uid` — user ID
  - Process:
    - Finds the user document by `_id`.
    - Uses `.populate('cart.product')` to replace product references with full product documents.
  - Response:
    - `200` with `{ message: 'user fetched successfully', payload: userObj }`

- `GET /users-api/compare/:pid`
  - Purpose: Compare a given product ID with a product document ID.
  - Parameters:
    - `:pid` — product ID
  - Notes: This route loads the product and logs whether the provided `pid` matches the product's internal ID.

## Schema Definitions

### `ProductModel` schema

Defined in `Models/ProductModel.js`.

- `productName`
  - Type: `String`
  - Required: yes
- `price`
  - Type: `Number`
  - Required: yes
- `brand`
  - Type: `String`
  - Required: yes
- `timestamps`
  - Automatically adds `createdAt` and `updatedAt` fields.
- `versionKey: false`
  - Disables the `__v` version field.

This schema represents products in the ecommerce store.

### `UserModel` schema

Defined in `Models/UserModel.js`.

- `name`
  - Type: `String`
  - Required: yes
- `email`
  - Type: `String`
  - Required: yes
  - Unique: yes
- `password`
  - Type: `String`
  - Required: yes
- `cart`
  - Type: Array of cart item objects
  - Each cart item includes:
    - `product` — ObjectId reference to the `product` model
    - `quantity` — Number, default `1`

This schema stores user account details and the current shopping cart contents.

## Data Flow Explanation

1. `server.js` starts the Express app and connects to MongoDB.
2. JSON requests are parsed by `express.json()`.
3. Product requests go through `prodRoute` under `/products-api`.
4. User requests go through `userRoute` under `/users-api`.
5. The cart update endpoint checks the user and product, then updates the embedded `cart` array inside the user document.
6. The user fetch endpoint populates cart product references so the response includes full product details.

## How to Run

- Install dependencies:
  - `npm install`
- Start the server:
  - `node server.js`
- The server listens on port `4000`.

## Notes

- The backend uses MongoDB via Mongoose.
- Passwords are hashed before user creation.
- The cart uses a nested schema with references to product documents.
- The `test.http` file can be used to test request bodies and endpoints in an HTTP client.
