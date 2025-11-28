/**
 * User Controller
 *
 * This controller handles all user-related operations.
 * Controllers contain the business logic for handling requests.
 *
 * @file userController.js
 * @description User CRUD operations
 */

/**
 * Sample users data (in-memory storage)
 * In a real application, this would be stored in a database
 */
let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    createdAt: new Date().toISOString(),
  },
];

/**
 * Counter for generating unique IDs
 * In a real application, the database would handle this
 */
let nextId = 4;

/**
 * Get all users
 *
 * @route GET /api/users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAllUsers = (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users,
  });
};

/**
 * Get a single user by ID
 *
 * @route GET /api/users/:id
 * @param {Object} req - Express request object (contains params.id)
 * @param {Object} res - Express response object
 */
const getUserById = (req, res) => {
  // Get the ID from the URL parameters and convert to number
  const id = parseInt(req.params.id, 10);

  // Find the user with the matching ID
  const user = users.find((u) => u.id === id);

  // If user not found, return 404 error
  if (!user) {
    return res.status(404).json({
      success: false,
      error: {
        message: `User with ID ${id} not found`,
      },
    });
  }

  // Return the found user
  res.json({
    success: true,
    data: user,
  });
};

/**
 * Create a new user
 *
 * @route POST /api/users
 * @param {Object} req - Express request object (contains body with user data)
 * @param {Object} res - Express response object
 */
const createUser = (req, res) => {
  // Get user data from request body
  const { name, email, role = "user" } = req.body;

  // Check if email already exists
  const emailExists = users.some((u) => u.email === email);
  if (emailExists) {
    return res.status(400).json({
      success: false,
      error: {
        message: "A user with this email already exists",
      },
    });
  }

  // Create new user object
  const newUser = {
    id: nextId++,
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
  };

  // Add to our users array
  users.push(newUser);

  // Return the created user with 201 status
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
};

/**
 * Update an existing user
 *
 * @route PUT /api/users/:id
 * @param {Object} req - Express request object (contains params.id and body)
 * @param {Object} res - Express response object
 */
const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, email, role } = req.body;

  // Find the user index
  const userIndex = users.findIndex((u) => u.id === id);

  // If user not found, return 404 error
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: {
        message: `User with ID ${id} not found`,
      },
    });
  }

  // Check if email is being updated and if it already exists for another user
  if (email && email !== users[userIndex].email) {
    const emailExists = users.some((u) => u.email === email && u.id !== id);
    if (emailExists) {
      return res.status(400).json({
        success: false,
        error: {
          message: "A user with this email already exists",
        },
      });
    }
  }

  // Update user with new data (only update fields that are provided)
  users[userIndex] = {
    ...users[userIndex],
    ...(name && { name }),
    ...(email && { email }),
    ...(role && { role }),
    updatedAt: new Date().toISOString(),
  };

  res.json({
    success: true,
    message: "User updated successfully",
    data: users[userIndex],
  });
};

/**
 * Delete a user
 *
 * @route DELETE /api/users/:id
 * @param {Object} req - Express request object (contains params.id)
 * @param {Object} res - Express response object
 */
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  // Find the user index
  const userIndex = users.findIndex((u) => u.id === id);

  // If user not found, return 404 error
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: {
        message: `User with ID ${id} not found`,
      },
    });
  }

  // Remove user from array
  const deletedUser = users.splice(userIndex, 1)[0];

  res.json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser,
  });
};

// Export all controller functions
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
