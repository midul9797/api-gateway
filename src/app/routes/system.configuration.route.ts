import express from 'express';

import { SystemConfigurationController } from '../controllers/system.configuration.controller';
// import auth from '../../middlewares/auth';
const router = express.Router();

// Define routes for system configuration
router
  .post(
    '/', // Route for creating a new system configuration
    SystemConfigurationController.createSystemConfiguration, // Controller function to handle system configuration creation
  )
  .patch('/', SystemConfigurationController.updateSystemConfiguration) // Route for updating an existing system configuration
  .get('/:key', SystemConfigurationController.getSystemConfiguration); // Route for getting a system configuration by key

// Export the router for system configuration routes
export const SystemConfigurationRoutes = router;
