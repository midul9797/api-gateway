import { Request, Response } from 'express';

import catchAsync from '../../shared/catchAsync';

import sendResponse from '../../shared/sendResponse';
import { CommentServices } from '../services/comment.service';

// Controller function to create a new comment record
const createComment = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentServices.createCommentInDB(req);
  sendResponse(res, result);
});

// Controller function to get a comment record
const getComment = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentServices.getCommentFromDB(req);
  sendResponse(res, result);
});

// Export the comment record controller
export const CommentController = {
  getComment,
  createComment,
};
