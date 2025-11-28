/**
 * Error Handler Middleware
 *
 * This middleware handles all errors that occur in the application.
 * It sends a consistent JSON error response to the client.
 *
 * @file errorHandler.js
 * @description Global error handling middleware
 */

/**
 * Error handler middleware function
 *
 * This is a special Express error-handling middleware.
 * It has 4 parameters (err, req, res, next) which tells Express
 * that this is an error handler.
 *
 * @param {Error} err - The error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const errorHandler = (err, req, res, next) => {
  // Log the error for debugging
  console.error("Error:", err.message);

  // In development, also log the stack trace
  if (process.env.NODE_ENV === "development") {
    console.error("Stack:", err.stack);
  }

  // Determine the status code
  // Use the error's statusCode if set, otherwise default to 500
  const statusCode = err.statusCode || 500;

  // Determine the error message
  // In production, don't expose internal error details
  const message =
    process.env.NODE_ENV === "production" && statusCode === 500
      ? "Internal Server Error"
      : err.message || "Something went wrong";

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      // Only include stack trace in development
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
};

module.exports = errorHandler;
