/**
 * Middleware Index
 *
 * This file exports all middleware from the middleware folder.
 * This allows for cleaner imports in other files.
 *
 * @file index.js
 *
 * @example
 * // Instead of:
 * const requestLogger = require('./middleware/requestLogger');
 * const errorHandler = require('./middleware/errorHandler');
 *
 * // You can do:
 * const { requestLogger, errorHandler } = require('./middleware');
 */

const requestLogger = require("./requestLogger");
const errorHandler = require("./errorHandler");
const notFoundHandler = require("./notFoundHandler");
const { validateRequired, validateEmail } = require("./validation");

module.exports = {
  requestLogger,
  errorHandler,
  notFoundHandler,
  validateRequired,
  validateEmail,
};
