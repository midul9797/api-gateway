import express from 'express';

import { CommentValidation } from '../validations/comment.validation';
import validateRequest from '../middlewares/validateRequest';
import { CommentController } from '../controllers/comment.controller';

// Create Express router instance
const router = express.Router();

router
  // Get comment by documentId and parentCommentId
  .get('/:documentId/:parentCommentId?', CommentController.getComment)
  // Create new comment
  .post(
    '/',
    validateRequest(CommentValidation.create),
    CommentController.createComment,
  );

export const CommentRoutes = router;
