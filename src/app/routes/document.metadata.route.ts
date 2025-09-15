import express from 'express';
import { DocumentMetadataController } from '../controllers/document.metadata.controller';

// Initialize the express router
const router = express.Router();

// Define routes for document metadata
router
  .get('/download/:documentId', DocumentMetadataController.downloadDocument)
  // Get document metadata by file ID
  .get('/shared', DocumentMetadataController.getSharedDocumentMetadata)
  .get('/deleted', DocumentMetadataController.getDeletedDocumentsMetadata)
  // Get document metadata from cache
  .get('/cache', DocumentMetadataController.getDocumentMetadataFromCache)
  // Get a single document metadata by ID
  .get('/:documentId', DocumentMetadataController.getDocumentMetadata)
  // Get all document metadata
  .get('/', DocumentMetadataController.getAllDocumentMetadata)
  // Create a new document metadata
  .post('/', DocumentMetadataController.createDocumentMetadata)
  .patch('/share', DocumentMetadataController.shareDocumentMetadata)
  // Update an existing document metadata
  .patch(
    '/delete/:documentId',
    DocumentMetadataController.deleteDocumentMetadata,
  )
  .patch(
    '/restore/:documentId',
    DocumentMetadataController.restoreDocumentMetadata,
  )
  .patch('/:documentId', DocumentMetadataController.updateDocumentMetadata)
  .delete(
    '/:documentId',
    DocumentMetadataController.deleteDocumentMetadataPermanently,
  );

// Export the router for document metadata routes
export const DocumentMetadataRoutes = router;
