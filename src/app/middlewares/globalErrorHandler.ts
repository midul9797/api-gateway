import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';
import handleValidationError from '../../errors/handleValidationError';
import ApiError from '../../errors/ApiError';
import config from '../../config';

// Define the global error handler function
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // Initialize default error response values
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  // Handle different types of errors
  if (error?.name === 'ValidationError') {
    // Handle validation errors
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    // Handle ApiError instances
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    // Handle general Error instances
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  }

  // Send the error response
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  // Continue the error handling process
  next();
};
export default globalErrorHandler;
