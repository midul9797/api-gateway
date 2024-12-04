import { z } from 'zod'; // Import Zod for schema validation

// Define the schema for creating a system configuration
const create = z.object({
  body: z.object({
    key: z.string(), // Key of the system configuration
    value: z.string(), // Value of the system configuration
    userId: z.string(), // User ID associated with the system configuration
    description: z.string().optional(), // Optional description of the system configuration
  }),
});

// Define the schema for updating a system configuration
const update = z.object({
  body: z.object({
    key: z.string(), // Key of the system configuration for update
    value: z.string(), // Value of the system configuration for update
    description: z.string().optional(), // Optional description of the system configuration for update
  }),
});

// Export the validation schemas for system configuration creation and update
export const SystemConfigurationValidation = {
  update,
  create,
};
