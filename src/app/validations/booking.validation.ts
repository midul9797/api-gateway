import { z } from 'zod'; // Import Zod for schema validation

// Define the schema for creating a booking
const create = z.object({
  body: z.object({
    title: z.string(), // Title of the booking
    description: z.string().optional(), // Optional description of the booking
    userId: z.string(), // User ID associated with the booking
    documentIds: z.array(z.string()), // Array of document IDs related to the booking
    bookingDate: z.string(), // Date of the booking
  }),
});

// Define the schema for updating a booking
const update = z.object({
  body: z.object({
    title: z.string().optional(), // Optional title of the booking for update
    description: z.string().optional(), // Optional description of the booking for update
    documentIds: z.array(z.string()), // Array of document IDs related to the booking for update
    bookingDate: z.string(), // Date of the booking for update
  }),
});

// Export the validation schemas for booking creation and update
export const UserValidation = {
  update,
  create,
};
