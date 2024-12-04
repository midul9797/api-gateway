import { NextFunction, RequestHandler, Response, Request } from 'express';

// catchAsync is a higher-order function that wraps an Express middleware function
// to catch and handle any errors that might occur during its execution.
const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Attempt to execute the wrapped middleware function.
      await fn(req, res, next);
    } catch (error) {
      // If an error occurs, pass it to the next middleware function in the stack.
      next(error);
    }
  };

export default catchAsync;
