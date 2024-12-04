import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync'; // Import catchAsync to handle async errors
import sendResponse from '../../shared/sendResponse'; // Import sendResponse to send responses
import { fileServices } from '../services/file.service'; // Import fileServices for file operations

// Controller function to upload a file
const uploadFile = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.uploadFileInDB(req); // Upload file to the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to download a file
const downloadFile = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.downloadFileFromDB(req); // Download file from the database
  // Set headers for the response
  Object.entries(result.headers || {}).forEach(([key, value]) => {
    res.setHeader(key, value as string);
  });
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get a file by ID
const getFile = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.getFileByIdFromDB(req); // Get a file by ID from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get all files by user ID
const getFiles = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.getFilesByUserIdFromDB(req); // Get all files by user ID from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to update a file
const updateFile = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.updateOneFileInDB(req); // Update a file in the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to delete a file
const deleteFile = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.deleteFileByIdFromDB(req); // Delete a file by ID from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to share a file
const shareFile = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.shareFileInDB(req); // Share a file in the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get all shared files by user ID
const getSharedFiles = catchAsync(async (req: Request, res: Response) => {
  const result = await fileServices.getAllSharedFilesByUserIdFromDB(req); // Get all shared files by user ID from the database
  sendResponse(res, result); // Send the result as a response
});

// Export the file controller
export const fileController = {
  uploadFile,
  downloadFile,
  deleteFile,
  updateFile,
  shareFile,
  getFile,
  getFiles,
  getSharedFiles,
};
