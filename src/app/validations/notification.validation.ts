import { z } from 'zod'; // Import Zod for schema validation

// Define the schema for creating a notification
const createNotificationZodSchema = z.object({
  body: z.object({
    message: z.string(), // Message content of the notification
    type: z.enum(['email', 'sms', 'none']), // Type of notification to be sent
    read: z.boolean(), // Indicates if the notification has been read
  }),
});

// Export the validation schema for creating a notification
export const notificationValidation = {
  createNotificationZodSchema,
};
