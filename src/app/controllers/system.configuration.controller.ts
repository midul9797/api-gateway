import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync'; // Import catchAsync to handle async errors
import sendResponse from '../../shared/sendResponse'; // Import sendResponse to send responses
import { SystemConfigurationServices } from '../services/system.configuration.service'; // Import SystemConfigurationServices for system configuration operations

// Controller function to create a new system configuration
const createSystemConfiguration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SystemConfigurationServices.createSystemConfigurationInDB(req); // Create system configuration in the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to get the system configuration
const getSystemConfiguration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SystemConfigurationServices.getSystemConfigurationFromDB(req); // Get system configuration from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to update the system configuration
const updateSystemConfiguration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SystemConfigurationServices.updateSystemConfigurationInDB(req); // Update system configuration in the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Export the SystemConfigurationController with its methods
export const SystemConfigurationController = {
  getSystemConfiguration,
  updateSystemConfiguration,
  createSystemConfiguration,
};
