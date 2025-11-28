/**
 * Configuration File
 *
 * This file contains all configuration variables for the server.
 * It reads from environment variables and provides defaults.
 *
 * @file config.js
 * @description Server configuration settings
 */

// ===================
// Server Configuration
// ===================

/**
 * Port number for the server to listen on
 * Reads from PORT environment variable or defaults to 5000
 */
const PORT = process.env.PORT || 5000;

/**
 * Node environment (development, production, test)
 * Defaults to 'development' if not set
 */
const NODE_ENV = process.env.NODE_ENV || "development";

// ===================
// CORS Configuration
// ===================

/**
 * CORS (Cross-Origin Resource Sharing) options
 * This determines which origins can access the API
 *
 * In development: Allow all origins (less secure, but convenient)
 * In production: Restrict to specific origins
 */
const CORS_OPTIONS = {
  // Allow requests from the frontend (Vite dev server)
  origin:
    NODE_ENV === "production"
      ? process.env.FRONTEND_URL || "http://localhost:5173"
      : "*", // In development, allow all origins

  // Allow credentials (cookies, authorization headers, etc.)
  credentials: true,

  // Allowed HTTP methods
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],

  // Allowed headers
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

// ===================
// API Configuration
// ===================

/**
 * API version prefix
 * Used for versioning the API endpoints
 */
const API_VERSION = "v1";

/**
 * Rate limiting configuration (for future use)
 */
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
};

// Export all configuration
module.exports = {
  PORT,
  NODE_ENV,
  CORS_OPTIONS,
  API_VERSION,
  RATE_LIMIT,
};
