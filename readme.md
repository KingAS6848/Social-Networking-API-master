# Social Networking Express API Server

This is an Express.js API server for managing user accounts, posts, comments, and likes.

## Features

- **User Management**: Allows users to sign up and log in.
- **Post Management**: Users can create, retrieve, update, and delete posts.
- **Commenting**: Users can comment on posts.
- **Likes**: Users can like posts.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and configure the following variables:

    ```plaintext
    PORT=8000
    JWT_SECRET=thisistopsecret
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

### Endpoints

- **POST /api/users/signup**: Sign up a new user.
- **POST /api/users/login**: Log in an existing user.
- **GET /api/posts**: Get all posts.
- **POST /api/posts**: Create a new post.
- **GET /api/posts/:id**: Get a specific post by ID.
- **PUT /api/posts/:id**: Update a post.
- **DELETE /api/posts/:id**: Delete a post.
- **POST /api/comments/:postId**: Add a comment to a post.
- **GET /api/comments/:postId**: Get comments for a post.
- **PUT /api/comments/:id**: Update a comment.
- **DELETE /api/comments/:id**: Delete a comment.
- **POST /api/likes/:postId**: Toggle like on a post.
- **GET /api/likes/:postId**: Get likes for a post.

### Authentication

- Authentication is required for certain endpoints using JWT.
- Include the JWT token in the `Authorization` header of requests requiring authentication.

## Error Handling

- Application errors are handled centrally using Express error handling middleware.
- Custom errors are thrown and caught as instances of `ApplicationError`.

## Folder Structure

```
src/
├── error-handler/
│   └── applicationError.js
├── features/
│   ├── User/
│   │   ├── user.controller.js
│   │   ├── user.model.js
│   │   └── user.routes.js
│   ├── Posts/
│   │   ├── post.controller.js
│   │   ├── post.model.js
│   │   └── post.routes.js
│   ├── comments/
│   │   ├── comment.controller.js
│   │   ├── comment.model.js
│   │   └── comment.route.js
│   └── likes/
│       ├── like.controller.js
│       ├── like.model.js
│       └── like.route.js
├── middlwares/
│   ├── jwt.middleware.js
│   ├── log.middleware.js
│   └── upload.middleware.js
└── index.js
```

## Logging

- Logs are managed using the Winston logger.
- Log messages are written to a file named `log.txt`.
- Each log message includes a timestamp indicating when the message was logged.



