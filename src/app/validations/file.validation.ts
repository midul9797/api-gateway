import { z } from 'zod'; // Import Zod for schema validation

// Define the schema for uploading a file
const uploadFileZodSchema = z.object({
  body: z.object({
    name: z.string(), // File name
    size: z.number(), // File size
    type: z.string(), // File type
    data: z.string(), // File data
  }),
});

// Define the schema for updating a file
const updateFileZodSchema = z.object({
  body: z.object({
    data: z.string(), // Updated file data
  }),
});

// Define the schema for sharing a file
const shareFileZodSchema = z.object({
  body: z.object({
    fileId: z.string(), // ID of the file to share
    email: z.string(), // Email of the recipient
    type: z.string(), // Type of share (e.g., 'public', 'private')
  }),
});

// Export the validation schemas for file operations
export const fileValidation = {
  uploadFileZodSchema,
  updateFileZodSchema,
  shareFileZodSchema,
};
