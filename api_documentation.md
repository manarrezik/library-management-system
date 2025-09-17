# 📚 Library Management System – API Documentation

This document describes all available API endpoints for the Library Management System.  
Authentication is done using **JWT Tokens**.  

---

## 🔑 Authentication & Users

- `POST /api/users` - Register a new user
```json
//request
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "Admin"
}

//response
{
  "_id": "650a2c...",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Admin",
  "token": "JWT_TOKEN_HERE"
}
`POST /api/users/login` - User login
  ```json
  // Request
  {
    "email": "john@example.com",
    "password": "123456"
  }
  
  // Response
  {
  "_id": "650a2c...",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Admin",
  "token": "JWT_TOKEN_HERE"
}
  ```

- `GET /api/users/profile` - Get user profile (protected)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Response
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "Admin",
  
  
  
  }
  ```

- `PUT /api/users/profile` - Update user profile (protected)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Request
  {
    "name": "John Updated",
    "email": "john@example.com",
    "password": "newpassword",
    "phone": "9876543210",
    "address": "456 New St"
  }
  
  // Response
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Updated",
    "email": "john@example.com",
    "isAdmin": false,
    "phone": "9876543210",
    "address": "456 New St",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

- `GET /api/users` - Get all users (admin only)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Response
  [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "John Doe",
      "email": "john@example.com",
      "isAdmin": false
    },
    {
      "_id": "60d21b4667d0d8992e610c86",
      "name": "Admin User",
      "email": "admin@example.com",
      "isAdmin": true
    }
  ]
  ```

- `GET /api/users/:id` - Get user by ID (admin only)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Response
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com",
    "isAdmin": false
  }
  ```

- `PUT /api/users/:id` - Update user (admin only)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Request
  {
    "name": "John Modified",
    "email": "john@example.com",
  
  }
  
  // Response
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Modified",
    "email": "john@example.com",
    "isAdmin": true
  }
  ```

- `DELETE /api/users/:id` - Delete user (admin only)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Response
  {
    "message": "User removed"
  }
  ```
  
##  📚Books

  `POST /api/books` - Delete user (admin only)
  ```json

  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }

  // Request 
  {
    "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "copies": 5
  
  }
  //Response
  {
    "_id": "650b1f...",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "copies": 5,
  "availableCopies": 5,
  "createdAt": "2025-09-15T22:00:00.000Z",
  "updatedAt": "2025-09-15T22:00:00.000Z"
  }
  ```
  
  `GET /api/books` 
  ```json

  
 
  //Response
  {
    "_id": "650b1f...",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "copies": 5,
    "availableCopies": 5
  }
  ```
  