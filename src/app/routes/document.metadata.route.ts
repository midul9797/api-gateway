import express from 'express';
import { DocumentMetadataController } from '../controllers/document.metadata.controller';

// Initialize the express router
const router = express.Router();

// Define routes for document metadata
router
  // Get document metadata by booking ID
  .get(
    '/booking/:bookingId',
    DocumentMetadataController.getDocumentMetadataByBookingId,
  )
  // Get document metadata by file ID
  .get('/file/:fileId', DocumentMetadataController.getDocumentMetadataByFileId)
  // Get document metadata from cache
  .get('/cache', DocumentMetadataController.getDocumentMetadataFromCache)
  // Get a single document metadata by ID
  .get('/:documentId', DocumentMetadataController.getDocumentMetadata)
  // Get all document metadata
  .get('/', DocumentMetadataController.getAllDocumentMetadata)
  // Create a new document metadata
  .post('/', DocumentMetadataController.createDocumentMetadata)
  // Update an existing document metadata
  .patch('/:documentId', DocumentMetadataController.updateDocumentMetadata)
  // Delete a document metadata by ID
  .delete('/:documentId', DocumentMetadataController.deleteDocumentMetadata);

// Export the router for document metadata routes
export const DocumentMetadataRoutes = router;
