/**
 * Routes Index
 *
 * This file combines all route modules and exports them.
 * It serves as the main router for the API.
 *
 * @file index.js
 * @description Main API router configuration
 */

const express = require("express");
const router = express.Router();

// Import route modules
const userRoutes = require("./userRoutes");
const healthRoutes = require("./healthRoutes");

/**
 * API Documentation Route
 *
 * @route GET /api
 * @desc Returns information about available API endpoints
 */
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Dev_Web API - Available Endpoints",
    version: "1.0.0",
    endpoints: {
      users: {
        base: "/api/users",
        methods: {
          "GET /api/users": "Get all users",
          "GET /api/users/:id": "Get user by ID",
          "POST /api/users": "Create a new user (requires: name, email)",
          "PUT /api/users/:id": "Update a user",
          "DELETE /api/users/:id": "Delete a user",
        },
      },
      health: {
        base: "/api/health",
        methods: {
          "GET /api/health": "Basic health check",
          "GET /api/health/details": "Detailed health check with metrics",
        },
      },
    },
    documentation: "See README.md for more details",
  });
});

/**
 * Mount route modules
 *
 * Each route module is mounted on a specific path.
 * For example, userRoutes will be available at /api/users/*
 */
router.use("/users", userRoutes);
router.use("/health", healthRoutes);

module.exports = router;
