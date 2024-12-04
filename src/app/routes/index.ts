import express from 'express';
import { FileRoutes } from './file.route';
import { DocumentMetadataRoutes } from './document.metadata.route';
import { UserRoutes } from './user.route';
import { SystemConfigurationRoutes } from './system.configuration.route';
import { BookingRecordRoutes } from './booking.route';
import { NotificationRoutes } from './notification.route';

// Initialize the express router
const router = express.Router();

// Define routes for different modules
const moduleRoutes = [
  {
    path: '/file',
    route: FileRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/booking',
    route: BookingRecordRoutes,
  },
  {
    path: '/document-metadata',
    route: DocumentMetadataRoutes,
  },
  {
    path: '/notification',
    route: NotificationRoutes,
  },
  {
    path: '/system-configuration',
    route: SystemConfigurationRoutes,
  },
];

// Use the routes for each module
moduleRoutes.forEach(route => router.use(route.path, route.route));

// Export the router for all the routes
export default router;
