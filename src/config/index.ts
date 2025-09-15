import dotenv from 'dotenv';
import path from 'path';
// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), '.env') });
// Export the configuration object
export default {
  // Environment mode
  env: process.env.NODE_ENV,
  // Port for the server to listen on
  port: process.env.PORT,
  // URL for the database
  database_url: process.env.DATABASE_URL,
  // Redis configuration
  redis: {
    url: process.env.REDIS_URL,
  },
  // URL for the document management service
  documentManagementServiceUrl: process.env.DOCUMENT_MANAGEMENT_SERVICE_URL,
  // URL for the notification service
  notificationServiceUrl: process.env.NOTIFICATION_SERVICE_URL,
  // URL for the basic storage service
  basicStorageServiceUrl: process.env.BASIC_STORAGE_SERVICE_URL,
  // URL for the comment service
  commentServiceUrl: process.env.COMMENT_SERVICE_URL,
};
