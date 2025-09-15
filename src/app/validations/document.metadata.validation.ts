import { z } from 'zod'; // Import Zod for schema validation

// Define the schema for creating document metadata
const create = z.object({
  body: z.object({
    title: z.string(), // Title of the document
    authorId: z.string(), // ID of the document's author
    version: z.number(),
    fileId: z.string(), // Version number of the document
    // ID of the booking associated with the document
  }),
});

// Define the schema for updating document metadata
const update = z.object({
  body: z.object({
    title: z.string(), // Title of the document for update
    
  }),
});

// Export the validation schemas for document metadata creation and update
export const DocumentMetadataValidation = {
  update,
  create,
};
