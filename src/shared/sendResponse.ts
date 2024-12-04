import { Response } from 'express';

// Define the structure of the response object
interface IResponse {
  success: boolean;
  statusCode: number;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: unknown;
}

// Function to send the response
const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message?: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data?: T;
  },
) => {
  // Create the response object
  const response: IResponse = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || 'Success',
    meta: data.meta,
    data: data.data || null,
  };

  // Send the response
  res.status(data.statusCode).json(response);
};

// Export the sendResponse function
export default sendResponse;
