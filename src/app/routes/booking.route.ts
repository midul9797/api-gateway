import express from 'express';
import { BookingRecordController } from '../controllers/booking.controller';

// Initialize the express router
const router = express.Router();

// Define routes for booking records
router
  // Get a single booking record by ID
  .get('/:bookingId', BookingRecordController.getBookingRecord)
  // Get all booking records
  .get('/', BookingRecordController.getAllBookingRecord)

  // Create a new booking record
  .post('/', BookingRecordController.createBookingRecord)
  // Update an existing booking record
  .patch('/:bookingId', BookingRecordController.updateBookingRecord)
  // Delete a booking record by ID
  .delete('/:bookingId', BookingRecordController.deleteBookingRecord);

// Export the router for booking records
export const BookingRecordRoutes = router;
