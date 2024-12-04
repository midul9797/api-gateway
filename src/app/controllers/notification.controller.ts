import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync'; // Import catchAsync to handle async errors
import sendResponse from '../../shared/sendResponse'; // Import sendResponse to send responses
import { notificationServices } from '../services/notification.service'; // Import notificationServices for notification operations

// Controller function to create a new notification
const createNotification = catchAsync(async (req: Request, res: Response) => {
  const result = await notificationServices.createNotificationInDB(req); // Create notification in the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get all notifications by user ID
const getNotifications = catchAsync(async (req: Request, res: Response) => {
  const result =
    await notificationServices.getAllNotificationByUserIdFromDB(req); // Get all notifications by user ID from the database
  sendResponse(res, result); // Send the result as a response
});

// Controller function to get notifications from the Redis cache
const getNotificationsFromCache = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await notificationServices.getNotificationsFromRedisCache(req); // Get notifications from the Redis cache
    sendResponse(res, result); // Send the result as a response
  },
);

// Export the notification controller
export const notificationController = {
  createNotification,
  getNotifications,
  getNotificationsFromCache,
};
