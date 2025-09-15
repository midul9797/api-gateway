import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync'; // Import catchAsync to handle async errors

import sendResponse from '../../shared/sendResponse'; // Import sendResponse to send responses

import { DocumentMetadataServices } from '../services/document.metadata.service'; // Import DocumentMetadataServices for document metadata operations

// Controller function to create a new document metadata
const createDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.createDocumentMetadataInDB(req); // Create document metadata in the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to get all document metadata
const getAllDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.getAllDocumentMetadataFromDB(req); // Get all document metadata from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to get a specific document metadata
const getDocumentMetadata = catchAsync(async (req: Request, res: Response) => {
  const result = await DocumentMetadataServices.getDocumentMetadataFromDB(req); // Get a document metadata from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get document metadata from the cache
const getDocumentMetadataFromCache = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.getDocumentMetadataFromRedisCache(req); // Get document metadata from the Redis cache
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to get document metadata by booking ID
const getDocumentMetadataByBookingId = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.getDocumentMetadataByBookingIdFromDB(req); // Get document metadata by booking ID from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to get document metadata by file ID
const getDocumentMetadataByFileId = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.getDocumentMetadataByFileIdFromDB(req); // Get document metadata by file ID from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to update document metadata
const updateDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.updateDocumentMetadataInDB(req); // Update document metadata in the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to delete document metadata
const deleteDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.deleteDocumentMetadataInDB(req); // Delete document metadata from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to restore document metadata

const restoreDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    
    const result =
      await DocumentMetadataServices.restoreDocumentMetadataInDB(req); // Restore document metadata from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to delete document metadata permanently

const deleteDocumentMetadataPermanently = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.deleteDocumentMetadataPermanentlyInDB(req); // Delete document metadata permanently from the database
    sendResponse(res, result); // Send the result as a response
  },
);

// Controller function to get deleted document metadata

const getDeletedDocumentsMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.getDeletedDocumentsMetadataInDB(req); // Get deleted document metadata from the database
    sendResponse(res, result); // Send the result as a response
  },
);
const shareDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.shareDocumentMetadataInDB(req); // Share document metadata in the database
    sendResponse(res, result); // Send the result as a response
  },
);
const getSharedDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await DocumentMetadataServices.getSharedDocumentMetadataInDB(req); // Get shared document metadata from the database
    sendResponse(res, result); // Send the result as a response
  },
);
const downloadDocument = catchAsync(async (req: Request, res: Response) => {
  const result = await DocumentMetadataServices.downloadDocumentInDB(req); // Download document from the database
  sendResponse(res, result); // Send the result as a response
});
// Export the DocumentMetadataController with all its functions
export const DocumentMetadataController = {
  getDocumentMetadata,
  updateDocumentMetadata,
  createDocumentMetadata,
  deleteDocumentMetadata,
  getAllDocumentMetadata,
  getDocumentMetadataByBookingId,
  getDocumentMetadataByFileId,
  getDocumentMetadataFromCache,
  restoreDocumentMetadata,
  deleteDocumentMetadataPermanently,
  getDeletedDocumentsMetadata,
  shareDocumentMetadata,
  getSharedDocumentMetadata,
  downloadDocument,
};
