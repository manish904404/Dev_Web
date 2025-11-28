/**
 * Request Logger Middleware
 *
 * This middleware logs information about each incoming HTTP request.
 * Useful for debugging and monitoring.
 *
 * @file requestLogger.js
 * @description Logs method, URL, and timestamp for each request
 *
 * @example
 * // Output: [2024-01-15 10:30:45] GET /api/users
 */

/**
 * Request logger middleware function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const requestLogger = (req, res, next) => {
  // Get current timestamp
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

  // Get request method and URL
  const method = req.method;
  const url = req.originalUrl || req.url;

  // Log the request
  console.log(`[${timestamp}] ${method} ${url}`);

  // Optional: Log request body for POST/PUT requests (for debugging)
  // Be careful not to log sensitive data in production!
  if (
    process.env.NODE_ENV === "development" &&
    (method === "POST" || method === "PUT")
  ) {
    if (Object.keys(req.body || {}).length > 0) {
      console.log("  Body:", JSON.stringify(req.body, null, 2));
    }
  }

  // Continue to the next middleware
  next();
};

module.exports = requestLogger;
