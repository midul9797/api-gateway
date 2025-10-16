import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { CommentService as HttpService } from '../../shared/axios';

import { notificationServices } from './notification.service';
import { UserServices } from './user.service';
import { DocumentMetadataServices } from './document.metadata.service';

// Function to create a new booking record in the database
const createCommentInDB = async (req: Request): Promise<IGenericResponse> => {
  // Extract documents from the request body and prepare the payload for comment creation
  const user_data = await UserServices.getUserFromDB(req);
  if (user_data.success) {
    req.body.user = user_data.data.name;
  }
  const response: IGenericResponse = await HttpService.post(
    `/comment/`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  if (response.success) {
    // Prepare the request for notification creation
    try {
      req.params = { documentId: req.body.documentId };
      const document_data =
        await DocumentMetadataServices.getDocumentMetadataFromDB(req);

      if (document_data.success) {
        req.body = {
          message: `${response.data.user} commented on ${document_data.data.title}`,
          type: 'none',
          read: false,
        };
        // Create a notification for the booking
        const notify = await notificationServices.createNotificationInDB(req);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return response;
};

// Function to get all booking records from the database
const getCommentFromDB = async (req: Request): Promise<IGenericResponse> => {
  // Fetch all comments
  console.log(req.params);
  const { documentId, parentCommentId } = req.params;
  const response: IGenericResponse = await HttpService.get(
    `/comment/${documentId}/${parentCommentId ? parentCommentId : ''}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

export const CommentServices = {
  createCommentInDB,
  getCommentFromDB,
};
