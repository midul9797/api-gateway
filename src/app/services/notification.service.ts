import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { NotificationService as HttpService } from '../../shared/axios';

// Function to create a notification in the database
const createNotificationInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Post request to create a notification with the request body and authorization header
  const response: IGenericResponse = await HttpService.post(
    `/notification/push`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to get all notifications by user ID from the database
const getAllNotificationByUserIdFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Get request to fetch all notifications with authorization header
  const response: IGenericResponse = await HttpService.get(`/notification`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

// Function to get notifications from Redis cache
const getNotificationsFromRedisCache = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Get request to fetch notifications from Redis cache with authorization header
  const response: IGenericResponse = await HttpService.get(
    `/notification/cache`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to update a notification in the database
const updateNotificationInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Patch request to update a notification with the request body and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/notification/${req.params.notificationId}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to read all notifications in the database
const readAllNotificationsInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Patch request to read all notifications with the request body and authorization header
  const response: IGenericResponse = await HttpService.patch(
    `/notification/read-all`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Export the notification services
export const notificationServices = {
  createNotificationInDB,
  getAllNotificationByUserIdFromDB,
  getNotificationsFromRedisCache,
  updateNotificationInDB,
  readAllNotificationsInDB,
};
