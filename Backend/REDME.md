Blog App Backend

Backend for a blog application using Node.js, Express.js, and MongoDB.

Setup

Prerequisites

Node.js (v16 or higher)

MongoDB (local or MongoDB Atlas)

Gmail account for email sending

Installation

Navigate to the server/ directory:

cd server

Install dependencies:

npm install

Create a .env file in server/:

MONGODB_URI=mongodb://localhost:27017/blogApp
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

Replace MONGODB_URI with your MongoDB connection string.

Set JWT_SECRET to a random string.

Use a Gmail App Password for EMAIL_PASS.

Running

Start the server:

npm run dev

The server runs at http://localhost:5000.

API Endpoints

Auth:

POST /api/auth/register: Register a user.

GET /api/auth/verify/:token: Verify email.

POST /api/auth/login: Login.

POST /api/auth/forgot-password: Request password reset.

POST /api/auth/reset/:token: Reset password.

Users:

GET /api/users/profile: Get user profile (auth).

PUT /api/users/profile: Update profile (auth).

GET /api/users/posts: Get user's posts (auth).

GET /api/users: Get all users (admin).

POST /api/users: Create user (admin).

PUT /api/users/:id: Update user (admin).

DELETE /api/users/:id: Delete user (admin).

Posts:

POST /api/posts: Create post (auth).

GET /api/posts: Get all posts.

GET /api/posts/:id: Get single post.

PUT /api/posts/:id: Update post (auth, author).

DELETE /api/posts/:id: Delete post (auth, author).

POST /api/posts/:id/like: Like post (auth).

POST /api/posts/:id/dislike: Dislike post (auth).

PUT /api/posts/:id/suspend: Suspend post (admin).

DELETE /api/posts/:id/admin: Delete post (admin).

GET /api/posts/search?q=<query>: Search posts by title.

Comments:

POST /api/comments/:postId: Create comment (auth).

GET /api/comments/:postId: Get comments for a post.

PUT /api/comments/:id/suspend: Suspend comment (admin).

DELETE /api/comments/:id: Delete comment (admin).

Testing

Use Postman to test endpoints.

Ensure MongoDB is running and .env is configured.
