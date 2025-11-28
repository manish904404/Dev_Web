/**
 * Not Found Handler Middleware
 *
 * This middleware handles requests to undefined routes.
 * It returns a 404 error response.
 *
 * @file notFoundHandler.js
 * @description 404 Not Found error handler
 */

/**
 * Not found handler middleware function
 *
 * This middleware should be placed after all route definitions.
 * It catches any requests that don't match any defined routes.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: {
      message: `Route not found: ${req.method} ${req.originalUrl}`,
      suggestion: "Please check the API documentation at /api",
    },
  });
};

module.exports = notFoundHandler;
