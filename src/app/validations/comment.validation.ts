import { z } from 'zod';

// Validation schema for creating a new user
// Requires name and email, with optional contact and profile details
const create = z.object({
  body: z.object({
    content: z.string(),
    documentId: z.string(),
    parentCommentId: z.string().optional(),
  }),
});

// Export validation schemas
export const CommentValidation = {
  create,
};
