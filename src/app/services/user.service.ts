import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { BasicStorageService as HttpService } from '../../shared/axios';

// Function to create a new user in the database
const createUserInDB = async (req: Request): Promise<IGenericResponse> => {
  // Post request to create a new user with the request body and authorization header
  const response: IGenericResponse = await HttpService.post(`/user`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

// Function to get a user from the database
const getUserFromDB = async (req: Request): Promise<IGenericResponse> => {
  // Get request to fetch a user with authorization header
  const response: IGenericResponse = await HttpService.get(`/user`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

// Function to get a user by email from the database
const getUserByEmailFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract email from request parameters
  const { email } = req.params;
  // Get request to fetch a user by email with authorization header
  const response: IGenericResponse = await HttpService.get(`/user/${email}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

// Function to update an existing user in the database
const updateUserInDB = async (req: Request): Promise<IGenericResponse> => {
  // Patch request to update an existing user with the request body and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/user`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Export the user services
export const UserServices = {
  createUserInDB,
  getUserFromDB,
  getUserByEmailFromDB,
  updateUserInDB,
};
