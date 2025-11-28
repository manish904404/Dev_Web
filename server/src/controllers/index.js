/**
 * Controllers Index
 *
 * This file exports all controllers from the controllers folder.
 *
 * @file index.js
 */

const userController = require("./userController");
const healthController = require("./healthController");

module.exports = {
  userController,
  healthController,
};
