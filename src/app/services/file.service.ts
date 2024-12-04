import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import {
  DocumentManagementService as HttpService,
  NotificationService,
} from '../../shared/axios';
import { UserServices } from './user.service';
import ApiError from '../../errors/ApiError';
import { notificationServices } from './notification.service';

// Function to upload a file to the database
const uploadFileInDB = async (req: Request): Promise<IGenericResponse> => {
  // Post request to upload a file with the request body and authorization header
  const response: IGenericResponse = await HttpService.post(
    `/file/upload`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to download a file from the database
const downloadFileFromDB = async (req: Request): Promise<IGenericResponse> => {
  // Extract file ID from request parameters
  const { fileId } = req.params;

  // Get request to download a file by ID with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/file/download/${fileId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to get a file by ID from the database
const getFileByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  // Extract file ID from request parameters
  const { fileId } = req.params;
  // Get request to fetch a file by ID with authorization header
  const response: IGenericResponse = await HttpService.get(`/file/${fileId}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};
// Function to get all files by user ID from the database
const getFilesByUserIdFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Get request to fetch all files with authorization header
  const response: IGenericResponse = await HttpService.get(`/file`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

// Function to update a single file in the database
const updateOneFileInDB = async (req: Request): Promise<IGenericResponse> => {
  // Extract file ID from request parameters
  const { fileId } = req.params;
  console.log(req.body, fileId);
  // Patch request to update a file with the request body and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/file/${fileId}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to delete a file by ID from the database
const deleteFileByIdFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract file ID from request parameters
  const { fileId } = req.params;
  // Delete request to remove a file by ID with authorization header
  const response: IGenericResponse = await HttpService.delete(
    `/file/${fileId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};
// Function to share a file in the database
const shareFileInDB = async (req: Request): Promise<IGenericResponse> => {
  try {
    // Modify request parameters to include email for sharing
    req.params = { email: req.body.email };
    // Fetch user by email to share file
    const user = await UserServices.getUserByEmailFromDB(req);

    if (user.data) {
      // Patch request to share a file with the request body and authorization header
      const response: IGenericResponse = await HttpService.patch(
        '/file/share',
        req.body,
        {
          headers: {
            Authorization: req.headers.authorization,
          },
        },
      );
      return response;
    }
    return user;
  } catch (error) {
    // Throw an error if file sharing fails
    throw new ApiError(400, 'Failed to share file');
  }
};

// Function to get all shared files by user ID from the database
const getAllSharedFilesByUserIdFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Get request to fetch all shared files with authorization header
  const response: IGenericResponse = await HttpService.get(`/file/share`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};
export const fileServices = {
  getFileByIdFromDB,
  getFilesByUserIdFromDB,
  updateOneFileInDB,
  uploadFileInDB,
  deleteFileByIdFromDB,
  downloadFileFromDB,
  shareFileInDB,
  getAllSharedFilesByUserIdFromDB,
};
