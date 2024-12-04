import { Request, Response } from 'express';

import catchAsync from '../../shared/catchAsync';

import sendResponse from '../../shared/sendResponse';

import { BookingRecordServices } from '../services/booking.service';

// Controller function to create a new booking record
const createBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingRecordServices.createBookingRecordInDB(req);
  sendResponse(res, result);
});

// Controller function to get a booking record
const getBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingRecordServices.getBookingRecordFromDB(req);
  sendResponse(res, result);
});

// Controller function to get all booking records
const getAllBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingRecordServices.getAllBookingRecordFromDB(req);
  sendResponse(res, result);
});

// Controller function to update a booking record
const updateBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingRecordServices.updateBookingRecordInDB(req);
  sendResponse(res, result);
});

// Controller function to delete a booking record
const deleteBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingRecordServices.deleteBookingRecordInDB(req);
  sendResponse(res, result);
});

// Export the booking record controller
export const BookingRecordController = {
  getBookingRecord,
  getAllBookingRecord,
  updateBookingRecord,
  createBookingRecord,
  deleteBookingRecord,
};
