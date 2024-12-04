// ApiError class extends the built-in Error class to provide additional properties and functionality
class ApiError extends Error {
  // The HTTP status code associated with the error
  statusCode: number;
  // Constructor for ApiError
  constructor(statusCode: number, message: string | undefined, stack = '') {
    // Call the constructor of the parent class (Error) with the provided message
    super(message);
    // Assign the HTTP status code to the instance
    this.statusCode = statusCode;
    // If a stack trace is provided, use it; otherwise, capture the stack trace
    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}
// Export the ApiError class as the default export
export default ApiError;
