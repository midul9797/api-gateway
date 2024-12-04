import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { BasicStorageService as HttpService } from '../../shared/axios';

// Function to create a new system configuration in the database
const createSystemConfigurationInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Post request to create a new system configuration with the request body and authorization header
  const response: IGenericResponse = await HttpService.post(
    `/system-configuration/`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to get a system configuration from the database by key
const getSystemConfigurationFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract the key from the request parameters
  const { key } = req.params;
  // Get request to fetch a system configuration by key with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/system-configuration/${key}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to update an existing system configuration in the database
const updateSystemConfigurationInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Patch request to update an existing system configuration with the request body and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/system-configuration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Export the system configuration services
export const SystemConfigurationServices = {
  createSystemConfigurationInDB,
  getSystemConfigurationFromDB,
  updateSystemConfigurationInDB,
};
