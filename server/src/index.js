/**
 * Server Entry Point
 *
 * This is the main entry point for the Express server.
 * It sets up middleware, routes, and starts the server.
 *
 * @file index.js
 * @description Main server configuration and startup
 */

// Load environment variables from .env file
// This should be done first to ensure all env vars are available
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");

// Import configuration
const { PORT, CORS_OPTIONS } = require("./config/config");

// Import middleware
const {
  requestLogger,
  errorHandler,
  notFoundHandler,
} = require("./middleware");

// Import routes
const apiRoutes = require("./routes");

// Create Express application
const app = express();

// ===================
// Middleware Setup
// ===================

/**
 * Enable CORS (Cross-Origin Resource Sharing)
 * This allows the frontend to make requests to this API
 */
app.use(cors(CORS_OPTIONS));

/**
 * Parse JSON request bodies
 * This allows us to access req.body for JSON payloads
 */
app.use(express.json());

/**
 * Parse URL-encoded request bodies
 * This allows us to access req.body for form submissions
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Custom request logger middleware
 * Logs information about each incoming request
 */
app.use(requestLogger);

// ===================
// Routes Setup
// ===================

/**
 * Root route - Health check / Welcome message
 */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Dev_Web API! 🚀",
    version: "1.0.0",
    documentation: "/api",
    endpoints: {
      users: "/api/users",
      health: "/api/health",
    },
  });
});

/**
 * API routes
 * All API endpoints are prefixed with /api
 */
app.use("/api", apiRoutes);

// ===================
// Error Handling
// ===================

/**
 * 404 Not Found handler
 * This catches any requests to undefined routes
 */
app.use(notFoundHandler);

/**
 * Global error handler
 * This catches any errors thrown in the application
 */
app.use(errorHandler);

// ===================
// Start Server
// ===================

app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════════╗
  ║                                            ║
  ║   🚀 Server is running!                    ║
  ║                                            ║
  ║   Local:   http://localhost:${PORT}          ║
  ║   API:     http://localhost:${PORT}/api      ║
  ║                                            ║
  ║   Environment: ${process.env.NODE_ENV || "development"}            ║
  ║                                            ║
  ╚════════════════════════════════════════════╝
  `);
});

// Export app for testing purposes
module.exports = app;
