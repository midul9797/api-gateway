import axios, { AxiosInstance } from 'axios';
import config from '../config';

// Function to create a new Axios instance with custom configuration
const HttpService = (baseUrl: string): AxiosInstance => {
  // Create a new Axios instance with the provided base URL and other configurations
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 100000, // Set timeout to 100 seconds
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to application/json
    },
  });

  // Add request interceptor to handle requests before they are sent
  instance.interceptors.request.use(
    config => {
      return config; // Return the config as is
    },
    error => {
      return error; // Return the error as is
    },
  );

  // Add response interceptor to handle responses before they are passed to then/catch
  instance.interceptors.response.use(
    response => {
      return response.data; // Return the response data directly
    },
    error => {
      return Promise.reject(error); // Reject the promise with the error
    },
  );

  return instance; // Return the configured Axios instance
};

// Create instances for different services using the HttpService function
const DocumentMetadataService = HttpService(
  config.documentManagementServiceUrl as string,
);
const CommentService = HttpService(config.commentServiceUrl as string);
const NotificationService = HttpService(
  config.notificationServiceUrl as string,
);
const BasicStorageService = HttpService(
  config.basicStorageServiceUrl as string,
);

// Export the services and the HttpService function
export {
  HttpService,
  DocumentMetadataService,
  NotificationService,
  BasicStorageService,
  CommentService,
};
