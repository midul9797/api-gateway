import express from 'express'; // Import express for routing
import { UserController } from '../controllers/user.controller'; // Import user controller for handling user operations

// Initialize the express router
const router = express.Router();

// Define routes for user operations
router
  .get('/:email', UserController.getUserByEmail) // Route for getting a user by email
  .get('/', UserController.getUser) // Route for getting a user (assuming default or current user)
  .post('/', UserController.createUser) // Route for creating a new user
  .patch('/', UserController.updateUser); // Route for updating an existing user

// Export the router for user routes
export const UserRoutes = router;
