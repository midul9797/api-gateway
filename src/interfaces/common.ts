// Interface for a generic response object
export interface IGenericResponse {
  headers: {};
  success: boolean; // Indicates if the operation was successful
  statusCode: number; // HTTP status code of the response
  message: string; // A message describing the response
  // Optional metadata for pagination
  meta?: {
    page: number; // The current page number
    limit: number; // The limit of items per page
    total: number; // The total number of items
  };
  data?: any; // The actual data of the response
}

// Interface for a generic error response object
export interface IGenericErrorResponse {
  statusCode: number; // HTTP status code of the error response
  message: string; // A message describing the error
  // Array of error messages with their paths
  errorMessages: {
    path: string; // The path where the error occurred
    message: string; // The error message
  }[];
}
