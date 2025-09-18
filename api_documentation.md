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



- `GET /api/users` - Get all users (admin only)
  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  
  // Response
  [
    {
      "_id": "68c9f190f7f653e9a915eb76",
        "name": "Manar",
        "email": "manar@example.com",
        "role": "Admin",
        "createdAt": "2025-09-16T23:24:00.057Z",
        "updatedAt": "2025-09-16T23:24:00.057Z",
        "__v": 0
    },
    
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
    "_id": "68c9f190f7f653e9a915eb76",
        "name": "Manar",
        "email": "manar@example.com",
        "role": "Admin",
        "createdAt": "2025-09-16T23:24:00.057Z",
        "updatedAt": "2025-09-16T23:24:00.057Z",
        "__v": 0
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
    "_id": "68c9f190f7f653e9a915eb76",
        "name": "john modified",
        "email": "john@example.com",
        "role": "Admin",
        "createdAt": "2025-09-16T23:24:00.057Z",
        "updatedAt": "2025-09-16T23:24:00.057Z",
        "__v": 0
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

  `POST /api/books` - Delete book (admin only)
  ```json

  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }


// Response
{
  "message": "Book removed successfully"
}
  ```
  
  `GET /api/books` - get all books
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
   `GET /api/books/:title` - get book by title 
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
   `POST /api/books` - post new book (admin only)
  ```json
  //Header
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }

//Request
  {
    "_id": "650b1f...",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "copies": 5,
    "availableCopies": 5
  }
  // Response
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

   `PUT /api/books/:id` - update specific book (admin only)
  ```json
//Header
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }



     //Request
   {
    "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "copies": 10
  }

  //Response
  {
  "_id": "650b1f...",
  "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "copies": 10,
  "availableCopies": 10,
  "updatedAt": "2025-09-15T23:00:00.000Z"
}
  ```
  

  
  