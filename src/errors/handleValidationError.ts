import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/error';
import { IGenericErrorResponse } from '../interfaces/common';

// Function to handle validation errors and return a formatted error response
const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  // Extract and format error messages from the validation error
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return { path: el?.path, message: el?.message };
    },
  );
  // Define the HTTP status code for validation errors
  const statusCode = 400;
  // Return the formatted error response
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors as { path: string; message: string }[],
  };
};
// Export the handleValidationError function
export default handleValidationError;
