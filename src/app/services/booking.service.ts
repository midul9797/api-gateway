import { Request } from 'express';
import { IGenericResponse } from '../../interfaces/common';
import { BasicStorageService as HttpService } from '../../shared/axios';
import { DocumentMetadataServices } from './document.metadata.service';
import { fileServices } from './file.service';
import { notificationServices } from './notification.service';

// Function to create a new booking record in the database
const createBookingRecordInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract documents from the request body and prepare the payload for booking creation
  const { documents, ...payloadBooking } = req.body;
  const response: IGenericResponse = await HttpService.post(
    `/booking/`,
    payloadBooking,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  // If the booking creation is successful, proceed to upload the document
  if (response.success) {
    let fileId;
    try {
      // Extract the first document's details and prepare the request for file upload
      const { title, ...others } = documents[0];
      req.body = { name: title, ...others };

      // Upload the file and get the file ID
      const fileResponse = await fileServices.uploadFileInDB(req);

      fileId = fileResponse.data._id;
      // Prepare the request for document metadata creation
      req.body = {
        title: documents[0].name,
        version: 0,
        bookingId: response.data.id,
        fileId,
      };
      // Create document metadata
      const documentResponse =
        await DocumentMetadataServices.createDocumentMetadataInDB(req);
    } catch (error) {
      // If there's an error during document upload or metadata creation, delete the file if it was uploaded
      if (fileId) {
        req.params = { id: fileId };
        const deleteFile = await fileServices.deleteFileByIdFromDB(req);
      }
      // Delete the booking record if there's an error
      const bookingDeleteResponse = await HttpService.delete(
        `/booking/${response.data.id}`,
        {
          headers: {
            Authorization: req.headers.authorization,
          },
        },
      );
    }
  }
  // Prepare the request for notification creation
  req.body = {
    message: `A new booking has been scheduled for ${response.data.bookingDate}`,
    type: 'none',
    read: false,
  };
  // Create a notification for the booking
  const notify = await notificationServices.createNotificationInDB(req);

  return response;
};

// Function to get all booking records from the database
const getAllBookingRecordFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Fetch all booking records
  const response: IGenericResponse = await HttpService.get(`/booking/`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

// Function to get a specific booking record from the database
const getBookingRecordFromDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract booking ID from the request parameters
  const { bookingId } = req.params;
  // Fetch the booking record by ID
  const response: IGenericResponse = await HttpService.get(
    `/booking/${bookingId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  console.log('res', response);
  return response;
};

// Function to update a booking record in the database
const updateBookingRecordInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract booking ID from the request parameters
  const { bookingId } = req.params;
  // Update the booking record
  const response: IGenericResponse = await HttpService.patch(
    `/booking/${bookingId}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

// Function to delete a booking record from the database
const deleteBookingRecordInDB = async (
  req: Request,
): Promise<IGenericResponse> => {
  // Extract booking ID from the request parameters
  const { bookingId } = req.params;
  // Delete the booking record
  const response: IGenericResponse = await HttpService.delete(
    `/booking/${bookingId}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

export const BookingRecordServices = {
  createBookingRecordInDB,
  getAllBookingRecordFromDB,
  getBookingRecordFromDB,
  updateBookingRecordInDB,
  deleteBookingRecordInDB,
};
