/**
 * Health Routes
 *
 * This file defines routes for health check endpoints.
 * Health checks are useful for monitoring and load balancers.
 *
 * @file healthRoutes.js
 * @description Health check API endpoints
 */

const express = require("express");
const router = express.Router();

// Import controller functions
const { healthController } = require("../controllers");

/**
 * @route   GET /api/health
 * @desc    Basic health check
 * @access  Public
 *
 * @example
 * // Request:
 * GET http://localhost:5000/api/health
 *
 * // Response:
 * {
 *   "success": true,
 *   "status": "healthy",
 *   "message": "Server is running",
 *   "timestamp": "2024-01-15T10:30:45.000Z"
 * }
 */
router.get("/", healthController.getHealth);

/**
 * @route   GET /api/health/details
 * @desc    Detailed health check with server metrics
 * @access  Public
 *
 * @example
 * // Request:
 * GET http://localhost:5000/api/health/details
 *
 * // Response:
 * {
 *   "success": true,
 *   "status": "healthy",
 *   "details": {
 *     "uptime": "1h 30m 45s",
 *     "memory": { ... },
 *     ...
 *   }
 * }
 */
router.get("/details", healthController.getHealthDetails);

module.exports = router;
