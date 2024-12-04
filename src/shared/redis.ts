import { createClient } from 'redis'; // Import createClient from 'redis' for creating a Redis client

import config from '../config'; // Import configuration settings

// Create a Redis client with the URL from the configuration
let redisClient = createClient({
  url: config.redis.url,
});

// Handle Redis errors by logging them to the console
redisClient.on('error', err => console.error('RedisError', err));
// Log a message when Redis connection is successful
redisClient.on('connect', err => console.info('Redis connected'));

// Function to connect to Redis asynchronously
const connect = async (): Promise<void> => {
  await redisClient.connect();
};

// Export the RedisClient object with the connect function
export const RedisClient = {
  connect,
};
