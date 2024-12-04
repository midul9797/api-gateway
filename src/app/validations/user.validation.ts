import { z } from 'zod'; // Import Zod for schema validation

// Define the schema for creating a user
const createUserZodSchema = z.object({
  body: z.object({
    name: z.string(), // Name of the user
    email: z.string(), // Email of the user
    phone: z.string().optional(), // Optional phone number of the user
    address: z.string().optional(), // Optional address of the user
    country: z.string().optional(), // Optional country of the user
    profileImage: z.string().optional(), // Optional profile image of the user
  }),
});

// Define the schema for updating a user
const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(), // Optional name of the user for update
    email: z.string().optional(), // Optional email of the user for update
    phone: z.string().optional(), // Optional phone number of the user for update
    address: z.string().optional(), // Optional address of the user for update
    country: z.string().optional(), // Optional country of the user for update
    profileImage: z.string().optional(), // Optional profile image of the user for update
  }),
});

// Export the validation schemas for user creation and update
export const UserValidation = {
  update: updateUserZodSchema,
  create: createUserZodSchema,
};
