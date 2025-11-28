/**
 * Validation Middleware
 *
 * This file contains middleware functions for validating request data.
 * Use these to ensure data integrity before processing requests.
 *
 * @file validation.js
 * @description Request validation middleware
 */

/**
 * Validate that required fields are present in the request body
 *
 * @param {Array<string>} requiredFields - Array of required field names
 * @returns {Function} Express middleware function
 *
 * @example
 * // Usage in routes:
 * router.post('/users', validateRequired(['name', 'email']), userController.create);
 */
const validateRequired = (requiredFields) => {
  return (req, res, next) => {
    const missingFields = [];

    // Check each required field
    requiredFields.forEach((field) => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });

    // If there are missing fields, return an error
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Missing required fields",
          missingFields: missingFields,
        },
      });
    }

    // All required fields are present, continue to the next middleware
    next();
  };
};

/**
 * Validate email format
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (email) {
    // Simple email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Invalid email format",
          field: "email",
        },
      });
    }
  }

  next();
};

module.exports = {
  validateRequired,
  validateEmail,
};
