import express from 'express'; // Import express for routing
import validateRequest from '../middlewares/validateRequest'; // Middleware for request validation
import { notificationValidation } from '../validations/notification.validation'; // Validation schema for notification operations
import { notificationController } from '../controllers/notification.controller'; // Controller for notification operations

// Initialize the express router
const router = express.Router();

// Define routes for notification operations
router
  .post(
    '/push', // Route for pushing a new notification
    validateRequest(notificationValidation.createNotificationZodSchema), // Validate request against the create notification schema
    notificationController.createNotification, // Controller function to handle notification creation
  )

  .get('/cache', notificationController.getNotificationsFromCache) // Route for getting notifications from cache
  .get('/', notificationController.getNotifications) // Route for getting all notifications
  .patch('/:notificationId', notificationController.updateNotification) // Route for updating a notification
  .patch('/read-all', notificationController.readAllNotifications); // Route for reading all notifications
// Export the router for notification routes
export const NotificationRoutes = router;
