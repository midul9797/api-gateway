import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { DocumentMetadataService as HttpService } from '../../shared/axios';
import { notificationServices } from './notification.service';
import { BasicStorageService } from '../../shared/axios';
import { UserServices } from './user.service';

// Function to create document metadata in the database
const createDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Post request to create document metadata with the request body and authorization header
  const author_data = await UserServices.getUserFromDB(req);
  if (author_data.success) {
    req.body.author = author_data.data.name;
  }
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

  // Patch request to update document metadata with the file name and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/document-metadata/${documentId}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  // If the update is successful, proceed to update the file and send a notification
  if (response.success) {
    req.body = {
      message: `A new version of ${req.body.title} has been uploaded`,
      type: 'email',
      read: false,
    };
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
  const response: IGenericResponse = await HttpService.patch(
    `/document-metadata/delete/${documentId}`,
    {},
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
const restoreDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  const { documentId } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/document-metadata/restore/${documentId}`,
    {},
    { headers: { Authorization: req.headers.authorization } },
  );
  req.body = {
    message: `A file has been restored`,
    type: 'email',
    read: false,
  };
  const notify = await notificationServices.createNotificationInDB(req);
  return response;
};
const deleteDocumentMetadataPermanentlyInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  const { documentId } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/document-metadata/${documentId}`,
    { headers: { Authorization: req.headers.authorization } },
  );
  return response;
};
const getDeletedDocumentsMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/deleted`,
    { headers: { Authorization: req.headers.authorization } },
  );
  return response;
};
const shareDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.patch(
    `/document-metadata/share`,
    req.body,
    { headers: { Authorization: req.headers.authorization } },
  );
  return response;
};
const getSharedDocumentMetadataInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/shared`,
    { headers: { Authorization: req.headers.authorization } },
  );

  return response;
};
const downloadDocumentInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  const { documentId } = req.params;
  const response: IGenericResponse = await HttpService.get(
    `/document-metadata/download/${documentId}`,
    { headers: { Authorization: req.headers.authorization } },
  );
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
  restoreDocumentMetadataInDB,
  deleteDocumentMetadataPermanentlyInDB,
  getDeletedDocumentsMetadataInDB,
  shareDocumentMetadataInDB,
  getSharedDocumentMetadataInDB,
  downloadDocumentInDB,
};
