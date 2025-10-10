import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Initialize the Express application
const app: Application = express();

// Set up body parser for JSON and URL encoded data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up CORS
app.use(
  cors({
    origin: 'https://document-management-suite-frontend.vercel.app',
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
  }),
);

// Set up cookie parser
app.use(cookieParser());

// Set up JSON and URL encoded data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up API routes
app.use('/api/v1', router);

// Set up global error handler
app.use(globalErrorHandler);

// Handle 404 errors
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: '.',
        message: 'API not found',
      },
    ],
  });
});

// Export the Express application
export default app;
