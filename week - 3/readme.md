# week-3

This folder contains week 3 API and CRUD practice work, including a simple Express CRUD API and a MongoDB-backed CRUD server with authentication and middleware.

## Tasks Completed

- `API_crud_Operations/`
  - Built an Express server with `express.json()` for JSON body parsing.
  - Created a router mounted at `/user-api`.
  - Implemented CRUD endpoints for user data using in-memory storage:
    - `GET /user-api/users` — list all users
    - `POST /user-api/user` — create a new user
    - `PUT /user-api/user/:id` — update a user by ID
    - `GET /user-api/user/:id` — get a user by ID
    - `DELETE /user-api/user/:id` — delete a user by ID
  - Tested the endpoints using HTTP request examples in `req.http`.

- `database_crud_operations/`
  - Created a MongoDB-connected Express server with Mongoose.
  - Configured middleware: `express.json()`, `cookie-parser`, and `helmet()`.
  - Connected to MongoDB at `mongodb://localhost:27017/userdb`.
  - Implemented user CRUD routes with `UserModel` and product CRUD routes with `ProductModel`.
  - Added user authentication with password hashing and JWT token issuance.
  - Protected a test route using token verification middleware.

## Concepts Covered

- Express application setup and routing
- REST CRUD operations (Create, Read, Update, Delete)
- JSON request parsing with `express.json()`
- Express Router for modular route grouping
- Middleware for security and parsing
- MongoDB connectivity with Mongoose
- Schema definition and validation with Mongoose schemas
- Password hashing with `bcryptjs`
- JSON Web Tokens (JWT) for authentication
- Cookie handling with `cookie-parser`
- HTTP request testing with `req.http`

## Definitions

- `Express`:
  - A Node.js web framework for building APIs and web servers.

- `express.json()`:
  - Middleware that parses incoming JSON request bodies into `req.body`.

- `express.Router()`:
  - Creates a router instance for defining modular route handlers.

- `app.use(path, router)`:
  - Mounts a router or middleware at a specific path prefix.

- `app.listen(port, callback)`:
  - Starts the server and listens for incoming requests on the given port.

- `GET`, `POST`, `PUT`, `DELETE`:
  - HTTP methods used for reading, creating, updating, and deleting resources.

- `Mongoose`:
  - An ODM (Object Data Modeling) library for MongoDB, providing schema-based models and database interaction.

- `Schema`:
  - A Mongoose structure that defines the shape, validation, and rules for documents in a collection.

- `model(name, schema)`:
  - Creates a Mongoose model used to interact with documents in the database.

- `connect(connectionString)`:
  - Establishes a connection to a MongoDB database.

- `cookie-parser`:
  - Middleware that parses cookies from HTTP requests and attaches them to `req.cookies`.
  
- `bcryptjs.hash(value, rounds)`:
  - Hashes a password string using a specified number of salt rounds.

- `bcryptjs.compare(value, hash)`:
  - Compares a plaintext value with a hashed value and returns whether they match.

- `jwt.sign(payload, secret, options)`:
  - Creates a signed JSON Web Token from a payload.

- `jwt.verify(token, secret)`:
  - Verifies a JWT and returns the decoded payload if valid.

- `res.status(code).json(object)`:
  - Sends an HTTP response with the given status code and JSON payload.

- `res.send(object)`:
  - Sends an HTTP response with a body.

- `async/await`:
  - JavaScript syntax for writing asynchronous code in a synchronous style.

- `try/catch`:
  - Used to handle runtime errors safely during async operations like database connection.

- `middleware`:
  - Functions that run during request processing to modify `req`, `res`, or handle authentication before reaching route handlers.

## Contents

- `req.http` — HTTP request examples for testing API endpoints
- `API_crud_Operations/` — in-memory Express CRUD users API
- `database_crud_operations/` — MongoDB-backed Express CRUD project with models, auth, and middleware

## Notes

Run each project in Node.js and install dependencies with `npm install`. Start the servers with `node index.js` for `API_crud_Operations` and `node server.js` for `database_crud_operations`.