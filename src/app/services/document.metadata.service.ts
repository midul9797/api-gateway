import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { BasicStorageService as HttpService } from '../../shared/axios';
import { fileServices } from './file.service';
import { notificationServices } from './notification.service';

// Function to create document metadata in the database
const createDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Post request to create document metadata with the request body and authorization header
  const response: IGenericResponse = await HttpService.post(
    `/document-metadata`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to get all document metadata from the database
const getAllDocumentMetadataFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Get request to fetch all document metadata with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};
// Function to get a specific document metadata from the database
const getDocumentMetadataFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract document ID from request parameters
  const { documentId } = req.params;
  // Get request to fetch a specific document metadata by ID with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/${documentId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};
// Function to get document metadata from Redis cache
const getDocumentMetadataFromRedisCache = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Get request to fetch document metadata from Redis cache with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/cache`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};
// Function to get document metadata by booking ID from the database
const getDocumentMetadataByBookingIdFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract booking ID from request parameters
  const { bookingId } = req.params;
  // Get request to fetch document metadata by booking ID with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/booking/${bookingId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};
// Function to get document metadata by file ID from the database
const getDocumentMetadataByFileIdFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract file ID from request parameters
  const { fileId } = req.params;
  // Get request to fetch document metadata by file ID with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/file/${fileId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to update document metadata in the database
const updateDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract document ID from request parameters
  const { documentId } = req.params;
  // Extract file from request body
  const { file } = req.body;
  console.log(file, documentId);
  // Patch request to update document metadata with the file name and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/document-metadata/${documentId}`,
    { title: file.name },
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  console.log('doc done');
  // If the update is successful, proceed to update the file and send a notification
  if (response) {
    req.params = { fileId: req.body.fileId };
    req.body = file;
    const fileResponse = await fileServices.updateOneFileInDB(req);
    req.body = {
      message: `A new version of ${file.name} has been uploaded`,
      type: 'email',
      read: false,
    };
    console.log('File done');
    const notify = await notificationServices.createNotificationInDB(req);
  }
  return response;
};

// Function to delete document metadata from the database
const deleteDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract document ID from request parameters
  const { documentId } = req.params;

  // Delete request to remove document metadata with authorization header
  const response: IGenericResponse = await HttpService.delete(
    `/document-metadata/${documentId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  // Prepare request body for notification creation
  req.body = {
    message: `A file has been deleted`,
    type: 'email',
    read: false,
  };
  // Create a notification for the deletion
  const notify = await notificationServices.createNotificationInDB(req);
  return response;
};

export const DocumentMetadataServices = {
  createDocumentMetadataInDB,
  getDocumentMetadataFromDB,
  updateDocumentMetadataInDB,
  deleteDocumentMetadataInDB,
  getDocumentMetadataByBookingIdFromDB,
  getAllDocumentMetadataFromDB,
  getDocumentMetadataByFileIdFromDB,
  getDocumentMetadataFromRedisCache,
};
