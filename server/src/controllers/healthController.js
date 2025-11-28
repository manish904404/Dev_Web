/**
 * Health Controller
 *
 * This controller handles health check endpoints.
 * Useful for monitoring and load balancer health checks.
 *
 * @file healthController.js
 * @description Server health check operations
 */

/**
 * Basic health check
 *
 * Returns a simple response indicating the server is running.
 *
 * @route GET /api/health
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getHealth = (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
};

/**
 * Detailed health check
 *
 * Returns more detailed information about server health.
 * In a real application, you might check database connections,
 * external services, memory usage, etc.
 *
 * @route GET /api/health/details
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getHealthDetails = (req, res) => {
  // Calculate uptime
  const uptimeSeconds = process.uptime();
  const uptimeFormatted = formatUptime(uptimeSeconds);

  // Get memory usage
  const memoryUsage = process.memoryUsage();

  res.json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    details: {
      uptime: uptimeFormatted,
      uptimeSeconds: Math.floor(uptimeSeconds),
      environment: process.env.NODE_ENV || "development",
      nodeVersion: process.version,
      platform: process.platform,
      memory: {
        heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
        rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
      },
    },
  });
};

/**
 * Helper function to format uptime
 *
 * @param {number} seconds - Uptime in seconds
 * @returns {string} Formatted uptime string
 */
function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  parts.push(`${secs}s`);

  return parts.join(" ");
}

module.exports = {
  getHealth,
  getHealthDetails,
};
