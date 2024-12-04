/* eslint-disable no-console */
import mongoose from 'mongoose'; // Import mongoose for database connection
import config from './config'; // Import configuration settings
import { Server } from 'http'; // Import Server from http module
import app from './app'; // Import the Express app
import { RedisClient } from './shared/redis'; // Import Redis client for caching and pub-sub

// Initialize server variable
let server: Server;

// Handle uncaught exceptions
process.on('uncaughtException', error => {
  console.log(error); // Log the error
  process.exit(1); // Exit the process with a non-zero status code
});

// Bootstrap function to initialize the server
async function boostrap() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(config.database_url as string);
    console.log('DB connected'); // Log successful database connection
    // Connect to Redis
    await RedisClient.connect();
    // Start the server and listen on the specified port
    server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`); // Log the port number
    });
  } catch (error) {
    console.log(`Failed to connect: ${error}`); // Log connection failure
  }

  // Handle unhandled promise rejections
  process.on('unhandledRejection', error => {
    if (server) {
      // Close the server before exiting
      server.close(() => {
        console.log(`Uncaught rejection: ${error}`); // Log the error
        process.exit(1); // Exit the process with a non-zero status code
      });
    } else {
      console.log(`Uncaught rejection: ${error}`); // Log the error
      process.exit(1); // Exit the process with a non-zero status code
    }
  });
}

// Call the bootstrap function to start the server
boostrap();

// Handle SIGTERM signal
process.on('SIGTERM', () => {
  console.log('SIGTERM received'); // Log SIGTERM signal
  if (server) {
    // Close the server before exiting
    server.close();
  }
});
