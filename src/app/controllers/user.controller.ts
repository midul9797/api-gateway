import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync'; // Import catchAsync to handle async errors
import sendResponse from '../../shared/sendResponse'; // Import sendResponse to send responses
import { UserServices } from '../services/user.service'; // Import UserServices for user operations

// Controller function to create a new user
const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUserInDB(req); // Create user in the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get a user
const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getUserFromDB(req); // Get user from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get a user by email
const getUserByEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getUserByEmailFromDB(req); // Get user by email from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to update a user
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.updateUserInDB(req); // Update user in the database
  sendResponse(res, result); // Send the result as a response
});

// Export the UserController with its methods
export const UserController = {
  getUser,
  updateUser,
  createUser,
  getUserByEmail,
};
