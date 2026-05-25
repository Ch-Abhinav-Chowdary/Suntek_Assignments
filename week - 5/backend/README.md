# Blog Platform Backend (Week 5)

This folder contains the Week 5 backend for a small blog platform built with Express and MongoDB. The backend implements user/author/admin roles, article management, authentication (JWT), image upload to Cloudinary, and basic admin operations.

**Backend Overview**

- Entry: `server.js` — boots Express, connects to MongoDB and mounts routers.
- Environment: configured with `dotenv` (see `.env` for `DB_URL`, `PORT`, `JWT_SECRET`, `CLOUDINARY_*`).
- Middleware: `express.json()`, `cookie-parser`, `cors`, global error handler and invalid-path handler.
- Routers mounted:
    - `/user-api` — public + user routes (`APIs/userAPI.js`)
    - `/author-api` — author routes (`APIs/authorAPI.js`)
    - `/admin-api` — admin routes (`APIs/adminAPI.js`)
    - `/common-api` — login, auth-check, single-article read (`APIs/commonAPI.js`)

**Dependencies / APIs used**

- `express`, `mongoose`, `dotenv`, `cors`, `cookie-parser`
- `bcryptjs` for password hashing
- `jsonwebtoken` for JWT auth
- `multer` (memory storage) + `cloudinary` for image uploads

## API Endpoints (summary)

Note: all endpoints return JSON and use standard HTTP status codes. Protected routes require a valid JWT token saved in an HttpOnly cookie named `token`.

### User API — `/user-api`

- `POST /user-api/users`
    - Purpose: Register a new **USER** (accepts optional `profileImageUrl` file). Uses `multer` memory upload then Cloudinary.
    - Body (form-data): `firstName`, `lastName`, `email`, `password`, optional `profileImageUrl` file
    - Response: `201` { message: 'user created', payload: newUser }

- `GET /user-api/articles` (protected: `USER`)
    - Purpose: Read all active articles. Populates `comments.user`.
    - Response: `200` { message: 'articles', payload: [...] }

- `PUT /user-api/articles` (protected: `USER`)
    - Purpose: Add a comment to an article.
    - Body (JSON): `{ articleId, user, comment }` where `user` must match authenticated user.
    - Response: `200` { message: 'comment added successfully', payload: updatedArticle }

### Author API — `/author-api`

- `POST /author-api/users`
    - Purpose: Register a new **AUTHOR** (same flow as user registration, accepts `profileImageUrl`).
    - Response: `201` { message: 'user created', payload: newUser }

- `POST /author-api/articles` (protected: `AUTHOR`)
    - Purpose: Create a new article. Body contains `author`, `title`, `content`, `category`.
    - Response: `201` { message: 'article created', payload: savedArticle }

- `GET /author-api/articles/:authorId` (protected: `AUTHOR`)
    - Purpose: Read active articles by the given author.
    - Response: `200` { message: 'articles', payload: [...] }

- `PUT /author-api/articles` (protected: `AUTHOR`)
    - Purpose: Edit an article. Body: `{ articleId, title, content, category, author }`.
    - Response: `200` { message: 'article updated', payload: updatedArticle }

- `DELETE /author-api/articles/authorId/:authorId/articleId/:articleId` (protected: `AUTHOR`)
    - Purpose: Soft-delete (set `isArticleActive:false`) an article owned by the author.
    - Response: `200` { message: 'article deleted', payload: article }

- `PATCH /author-api/articles/authorId/:authorId/articleId/:articleId` (protected: `AUTHOR`)
    - Purpose: Restore a soft-deleted article (`isArticleActive:true`).
    - Response: `200` { message: 'article restored', payload: article }

### Admin API — `/admin-api`

- `GET /admin-api/articles` (protected)
    - Purpose: Read all articles (admin view).
    - Response: `200` { message: 'All articles', payload: [...] }

- `PUT /admin-api/block-user` (protected + admin)
    - Purpose: Block a user (`isActive:false`). Body: `{ userId, adminId }`.
    - Response: `200` { message: 'User blocked successfully', payload: updatedUser }

- `PUT /admin-api/unblock-user` (protected + admin)
    - Purpose: Unblock a user (`isActive:true`). Body: `{ userId, adminId }`.
    - Response: `200` { message: 'User unblocked successfully', payload: updatedUser }

### Common API — `/common-api`

- `POST /common-api/login`
    - Purpose: Authenticate (email + password). On success sets an HttpOnly cookie `token` and returns the user object (without password).
    - Response: `200` { message: 'login success', payload: user }

- `GET /common-api/check-auth` (protected)
    - Purpose: Verify JWT and return the current user object (no password).
    - Response: `200` { message: 'Authenticated', payload: user }

- `GET /common-api/articles/:articleId` (protected)
    - Purpose: Get a single active article by ID (populates author and comment authors).
    - Response: `200` { message: 'article', payload: article }

- `USE /common-api/logout`
    - Purpose: Clear the `token` cookie and log out the user.

- `PUT /common-api/change-password` (protected)
    - Purpose: Change the password for a user. Body: `{ userId, oldPassword, newPassword }`.

## Schema Definitions

### `User` (`models/userModel.js`)

- `firstName` (String, required)
- `lastName` (String)
- `email` (String, required, unique)
- `password` (String, required — stored hashed)
- `profileImageUrl` (String)
- `role` (String — "AUTHOR" | "USER" | "ADMIN")
- `isActive` (Boolean, default: true)

### `Article` (`models/articleModel.js`)

- `author` — ObjectId ref to `user`, required
- `title` (String, required)
- `category` (String, required)
- `content` (String, required)
- `comments` — array of `{ user: ObjectId ref 'user', comment: String }`
- `isArticleActive` (Boolean, default: true)

## Auth and Security

- Authentication uses JWT stored in an HttpOnly cookie named `token` (issued on successful login).
- `verifyToken(...roles)` middleware validates the token and ensures the user's role is allowed for the route.
- Passwords are hashed with `bcryptjs` before saving.

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file with values (example):

```
PORT=4000
DB_URL=mongodb://localhost:27017/blogplatform
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

3. Start the server (development):

```bash
npm run dev
```

Server will log the DB connection status and start on `PORT` from `.env`.

## File Structure (important files)

- `server.js` — app entry, mounts routers and error handler
- `APIs/` — `userAPI.js`, `authorAPI.js`, `adminAPI.js`, `commonAPI.js`
- `models/` — `userModel.js`, `articleModel.js`
- `middleware/` — `verifyToken.js`, `verifyAuthor.js`, `checkAdmin.js`
- `services/authService.js` — `register` and `authenticate` logic
- `config/` — `multer.js`, `cloudinary.js`, `cloudinaryUpload.js`

## Notes

- Image uploads use `multer` with memory storage and `cloudinary` for hosting; temporary rollbacks remove uploaded images on errors.
- Global error middleware handles Mongoose validation/cast errors and duplicate key errors.
- Use `req.http` or Postman to test endpoints; `req.http` is included in the project root for quick testing.
