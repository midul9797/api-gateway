import express from 'express'; // Import express for routing
import validateRequest from '../middlewares/validateRequest'; // Middleware for request validation
import { fileValidation } from '../validations/file.validation'; // Validation schema for file operations
import { fileController } from '../controllers/file.controller'; // Controller for file operations
// import auth from '../../middlewares/auth'; // Authentication middleware (not used in this selection)
const router = express.Router(); // Initialize express router

// Define routes for file operations
router
  .post(
    '/upload', // Route for uploading a file
    validateRequest(fileValidation.uploadFileZodSchema), // Validate request against the upload file schema
    fileController.uploadFile, // Controller function to handle file upload
  )

  .get('/download/:fileId', fileController.downloadFile) // Route for downloading a file by ID
  .get('/share ', fileController.getSharedFiles) // Route for getting shared files
  .get('/:fileId', fileController.getFile) // Route for getting a file by ID
  .get('/', fileController.getFiles) // Route for getting all files
  .patch('/share', fileController.shareFile) // Route for sharing a file
  .patch('/:fileId', fileController.updateFile) // Route for updating a file by ID
  .delete('/:fileId', fileController.deleteFile); // Route for deleting a file by ID

export const FileRoutes = router; // Export the router for file routes
