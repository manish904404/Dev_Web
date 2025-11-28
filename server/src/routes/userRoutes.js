/**
 * User Routes
 *
 * This file defines all routes related to user operations.
 * Routes define the endpoints and connect them to controller functions.
 *
 * @file userRoutes.js
 * @description User API endpoints
 */

const express = require("express");
const router = express.Router();

// Import controller functions
const { userController } = require("../controllers");

// Import validation middleware
const { validateRequired, validateEmail } = require("../middleware");

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Public
 *
 * @example
 * // Request:
 * GET http://localhost:5000/api/users
 *
 * // Response:
 * {
 *   "success": true,
 *   "count": 3,
 *   "data": [...]
 * }
 */
router.get("/", userController.getAllUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Get a single user by ID
 * @access  Public
 *
 * @example
 * // Request:
 * GET http://localhost:5000/api/users/1
 *
 * // Response:
 * {
 *   "success": true,
 *   "data": { "id": 1, "name": "John Doe", ... }
 * }
 */
router.get("/:id", userController.getUserById);

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @access  Public
 *
 * @example
 * // Request:
 * POST http://localhost:5000/api/users
 * Content-Type: application/json
 * {
 *   "name": "New User",
 *   "email": "newuser@example.com",
 *   "role": "user"
 * }
 *
 * // Response:
 * {
 *   "success": true,
 *   "message": "User created successfully",
 *   "data": { "id": 4, "name": "New User", ... }
 * }
 */
router.post(
  "/",
  validateRequired(["name", "email"]),
  validateEmail,
  userController.createUser
);

/**
 * @route   PUT /api/users/:id
 * @desc    Update an existing user
 * @access  Public
 *
 * @example
 * // Request:
 * PUT http://localhost:5000/api/users/1
 * Content-Type: application/json
 * {
 *   "name": "Updated Name"
 * }
 *
 * // Response:
 * {
 *   "success": true,
 *   "message": "User updated successfully",
 *   "data": { "id": 1, "name": "Updated Name", ... }
 * }
 */
router.put("/:id", validateEmail, userController.updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user
 * @access  Public
 *
 * @example
 * // Request:
 * DELETE http://localhost:5000/api/users/1
 *
 * // Response:
 * {
 *   "success": true,
 *   "message": "User deleted successfully",
 *   "data": { "id": 1, ... }
 * }
 */
router.delete("/:id", userController.deleteUser);

module.exports = router;
