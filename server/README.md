# Server - Node.js + Express

This is the backend server application built with **Node.js** and **Express**.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Extending the API](#extending-the-api)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Getting Started

1. **Navigate to the server folder:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Edit .env with your settings (optional)
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Test the API:**

   Open your browser or use curl to visit `http://localhost:5000`

   ```bash
   curl http://localhost:5000
   ```

## 📜 Available Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Start the server with nodemon (auto-restart)     |
| `npm start`     | Start the server in production mode              |
| `npm test`      | Run tests (not configured yet)                   |

## 📁 Folder Structure

```
server/
├── src/
│   ├── config/              # Configuration files
│   │   ├── index.js         # Config exports
│   │   └── config.js        # Server configuration
│   ├── controllers/         # Request handlers
│   │   ├── index.js         # Controller exports
│   │   ├── userController.js    # User CRUD operations
│   │   └── healthController.js  # Health check operations
│   ├── middleware/          # Custom middleware
│   │   ├── index.js         # Middleware exports
│   │   ├── requestLogger.js # Request logging
│   │   ├── errorHandler.js  # Error handling
│   │   ├── notFoundHandler.js   # 404 handling
│   │   └── validation.js    # Input validation
│   ├── routes/              # Route definitions
│   │   ├── index.js         # Main router
│   │   ├── userRoutes.js    # User routes
│   │   └── healthRoutes.js  # Health check routes
│   └── index.js             # Server entry point
├── .env.example             # Example environment variables
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🌐 API Endpoints

### Root

| Method | Endpoint | Description              |
| ------ | -------- | ------------------------ |
| GET    | `/`      | Welcome message & info   |
| GET    | `/api`   | API documentation        |

### Users

| Method | Endpoint         | Description        | Body Required           |
| ------ | ---------------- | ------------------ | ----------------------- |
| GET    | `/api/users`     | Get all users      | No                      |
| GET    | `/api/users/:id` | Get user by ID     | No                      |
| POST   | `/api/users`     | Create a new user  | `{ name, email, role }` |
| PUT    | `/api/users/:id` | Update a user      | `{ name, email, role }` |
| DELETE | `/api/users/:id` | Delete a user      | No                      |

### Health

| Method | Endpoint              | Description                    |
| ------ | --------------------- | ------------------------------ |
| GET    | `/api/health`         | Basic health check             |
| GET    | `/api/health/details` | Detailed health check          |

### Example Requests

**Get all users:**
```bash
curl http://localhost:5000/api/users
```

**Create a user:**
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com"}'
```

**Update a user:**
```bash
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name"}'
```

**Delete a user:**
```bash
curl -X DELETE http://localhost:5000/api/users/1
```

## 🔌 Middleware

The server includes several custom middleware:

### Request Logger

Logs all incoming requests with timestamp, method, and URL.

```
[2024-01-15 10:30:45] GET /api/users
```

### Error Handler

Catches and formats all errors consistently.

```json
{
  "success": false,
  "error": {
    "message": "Error message here"
  }
}
```

### Validation Middleware

Validates request data before processing.

```javascript
// Usage in routes:
router.post('/users', validateRequired(['name', 'email']), controller.create);
```

## 🔐 Environment Variables

Create a `.env` file in the server folder (copy from `.env.example`):

```env
# Server port (default: 5000)
PORT=5000

# Environment (development, production, test)
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
```

## ⚠️ Error Handling

All errors are returned in a consistent format:

**Success Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "message": "Error description"
  }
}
```

**Common HTTP Status Codes:**

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

## 🔧 Extending the API

### Adding a New Route

1. **Create a controller** in `src/controllers/`:

   ```javascript
   // src/controllers/productController.js
   const getAllProducts = (req, res) => {
     res.json({ success: true, data: [] });
   };

   module.exports = { getAllProducts };
   ```

2. **Create a route** in `src/routes/`:

   ```javascript
   // src/routes/productRoutes.js
   const express = require('express');
   const router = express.Router();
   const { getAllProducts } = require('../controllers/productController');

   router.get('/', getAllProducts);

   module.exports = router;
   ```

3. **Register the route** in `src/routes/index.js`:

   ```javascript
   const productRoutes = require('./productRoutes');
   router.use('/products', productRoutes);
   ```

### Adding Middleware

1. **Create middleware** in `src/middleware/`:

   ```javascript
   // src/middleware/authMiddleware.js
   const authenticate = (req, res, next) => {
     // Your authentication logic
     next();
   };

   module.exports = authenticate;
   ```

2. **Use in routes**:

   ```javascript
   const authenticate = require('../middleware/authMiddleware');
   router.get('/protected', authenticate, controller.protectedRoute);
   ```

---

Happy coding! 🎉
