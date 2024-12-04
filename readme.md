# API Gateway

This repository contains the backend implementation for API Gateway of Document Management Suite.

---

## Explanation Video:

https://drive.google.com/file/d/1uea1MB2D8J8lyGyiItUnDr70PsvKLdOo/view?usp=sharing

## Prerequisites

- Node.js (version 20 or later)
- npm or yarn
- Redis(Port: 6379)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/midul9797/api-gateway.git
cd api-gateway
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

1. Rename `envfile.example` to `.env`
2. It contains the required environment variables

### 4. Start Server

```bash
npm start
# or
yarn start
```

## Project Structure

### Root Directory

- **`.env`**: Environment variables for the application.
- **`.eslintignore`**: Specifies files and directories ignored by ESLint.
- **`.eslintrc`**: ESLint configuration file for defining linting rules.
- **`.gitignore`**: Specifies files and directories ignored by Git.
- **`.prettierrc`**: Configuration file for Prettier code formatting.
- **`.structignore`**: File used to define rules for ignoring structure-related checks.
- **`package-lock.json`**: Automatically generated file for locking dependencies.
- **`package.json`**: Contains project metadata, dependencies, and scripts.
- **`readme.md`**: Documentation for the project.
- **`tsconfig.json`**: TypeScript configuration file.

---

### **`src/`** Directory

The core source code of the application.

#### **`app/`**

Contains the main application logic, organized by domain and functionality.

- **`controllers/`**: Handles incoming requests and interacts with services.

  - `booking.controller.ts`: Booking-related request handling.
  - `document.metadata.controller.ts`: Document metadata-related request handling.
  - `file.controller.ts`: File-related request handling.
  - `notification.controller.ts`: Notification-related request handling.
  - `system.configuration.controller.ts`: System configuration request handling.
  - `user.controller.ts`: User-related request handling.

- **`middlewares/`**: Middleware for handling custom logic and errors.

  - `globalErrorHandler.ts`: Middleware for centralized error handling.
  - `validateRequest.ts`: Middleware for validating incoming requests using schemas.

- **`routes/`**: Defines API routes for different services.

  - `booking.route.ts`: Routes for booking-related operations.
  - `document.metadata.route.ts`: Routes for document metadata operations.
  - `file.route.ts`: Routes for file management operations.
  - `index.ts`: Combines all routes into a single router.
  - `notification.route.ts`: Routes for notification-related operations.
  - `system.configuration.route.ts`: Routes for system configuration operations.
  - `user.route.ts`: Routes for user management.

- **`services/`**: Contains the business logic of the application.

  - `booking.service.ts`: Business logic for booking operations.
  - `document.metadata.service.ts`: Business logic for document metadata.
  - `file.service.ts`: Business logic for file operations.
  - `notification.service.ts`: Business logic for notifications.
  - `system.configuration.service.ts`: Business logic for system configuration.
  - `user.service.ts`: Business logic for user management.

- **`validations/`**: Defines validation schemas for incoming requests.
  - `booking.validation.ts`: Validation for booking requests.
  - `document.metadata.validation.ts`: Validation for document metadata requests.
  - `file.validation.ts`: Validation for file-related requests.
  - `notification.validation.ts`: Validation for notification requests.
  - `system.configuration.validation.ts`: Validation for system configuration requests.
  - `user.validation.ts`: Validation for user requests.

---

#### Other Directories and Files

- **`app.ts`**: Initializes the Express app, middleware, and routes.
- **`config/`**
  - `index.ts`: Centralized configuration for environment variables and app settings.
- **`errors/`**
  - `ApiError.ts`: Custom error class for API-specific errors.
  - `handleValidationError.ts`: Utility for handling validation errors.
- **`helpers/`**: Utility functions for various tasks (empty or add as needed).
- **`interfaces/`**
  - `common.ts`: Shared interfaces for reusable types.
  - `error.ts`: Interfaces related to error handling.
- **`server.ts`**: Entry point for the application, initializes and starts the server.
- **`shared/`**
  - `axios.ts`: Axios configuration for making HTTP requests.
  - `catchAsync.ts`: Utility for handling async function errors.
  - `redis.ts`: Redis integration utility for caching and pub-sub.
  - `sendResponse.ts`: Utility for standardizing API responses.

---

# API Gateway API Documentation

This part describes the endpoints for the API Gateway, enabling operations such as managing document metadata, handling bookings, user management, notifications, file uploads, and system configuration.

## Base URL

```
{{baseUrl}} = http://localhost:4000/api/v1
```

---

## Endpoints

---

### 1. **Document Metadata**

#### Retrieve All Document Metadata

- **Method:** `GET`
- **URL:** `/document-metadata`
- **Description:** Retrieve all document metadata records.
- **Headers:**
  - `Accept: application/json`
  - `Authorization: <your-token>`

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata retrived successfully",
  "data": [
    {
      "id": "e9f3de27-688e-4864-823a-9640b0abb7c3",
      "title": "Shohojogi SRS (221012412).pdf",
      "version": 0,
      "lastModified": "2024-12-01T20:43:13.454Z",
      "fileId": "674cca5ffd6aa09f56c7e0ac",
      "author": {
        "name": "Moklasur Rahman",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "7ded0b6f-90b7-4a76-91dd-e68ae6148c3e",
        "title": "Party ",
        "description": "I have to go to a party. Need a babysitter",
        "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
        "bookingDate": "December 10th, 2024 19:41",
        "createdAt": "2024-12-01T20:43:10.300Z",
        "updatedAt": "2024-12-01T20:43:10.300Z"
      }
    },
    {
      "id": "d3c26641-ab32-49eb-b4e2-215f7e3ca7a7",
      "title": "+.pdf",
      "version": 0,
      "lastModified": "2024-12-01T20:52:37.428Z",
      "fileId": "674ccc95fd6aa09f56c7e0b0",
      "author": {
        "name": "Moklasur Rahman",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "6b3dc10f-6e60-4185-9370-664d9f2f48d3",
        "title": "asdf",
        "description": "asdf",
        "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
        "bookingDate": "December 18th, 2024 02:57",
        "createdAt": "2024-12-01T20:52:35.219Z",
        "updatedAt": "2024-12-01T20:52:35.219Z"
      }
    }
  ]
}
```

---

#### Create a New Document Metadata

- **Method:** `POST`
- **URL:** `/document-metadata`
- **Description:** Add a new document metadata record.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "bookingId": "a61e19a4-99e6-408c-a722-a46a8c8b5b14",
  "title": "Testing",
  "version": 0,
  "fileId": "674f1052a30eb739be0b5651"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata created successfully",
  "data": {
    "title": "Testing",
    "version": 0,
    "lastModified": "2024-12-03T18:04:10.057Z",
    "author": {
      "name": "MR midul",
      "email": "moklasurrahman9797@gmail.com"
    }
  }
}
```

---

#### Retrieve Document Metadata by ID

- **Method:** `GET`
- **URL:** `/document-metadata/{{documentId}}`
- **Description:** Fetch a specific document's metadata by its ID.
- **Headers:**
  - `Accept: application/json`
  - `Authorization: <your-token>`

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata retrived successfully",
  "data": {
    "id": "e23d99eb-0561-4366-bbad-c4600481aced",
    "title": "Shohojogi SRS (221012412).pdf",
    "authorId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "lastModified": "2024-12-01T21:06:51.795Z",
    "version": 0,
    "fileId": "674ccfeafd6aa09f56c7e0b4",
    "bookingId": "a627aa5c-862f-4f52-8470-d211b840ab1a"
  }
}
```

---

#### Update Document Metadata

- **Method:** `PATCH`
- **URL:** `/document-metadata/{{documentId}}`
- **Description:** Update a document's metadata.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "file": {
    "name": "updated",
    "size": 1223123,
    "type": "application/pdf",
    "data": "base64 binary string"
  },
  "fileId": "674b7e29758167dd6985b050"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "DocumentMetadata updated successfully",
  "data": true
}
```

---

#### Delete Document Metadata

- **Method:** `DELETE`
- **URL:** `/document-metadata/{{documentId}}`
- **Description:** Remove a document's metadata record.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata deleted successfully",
  "data": true
}
```

---

#### Retrieve Document Metadata by File ID

- **Method:** `GET`
- **URL:** `/document-metadata/file/{{fileId}}`
- **Description:** Fetch document metadata using a file's ID.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata retrived successfully",
  "data": {
    "id": "3b01f774-43bc-4bf5-bcf4-a355324199d3",
    "title": "Moklasur_Rahman_FulStack.pdf",
    "authorId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "lastModified": "2024-11-30T21:05:45.666Z",
    "version": 0,
    "fileId": "674b7e29758167dd6985b050",
    "bookingId": "3fc50271-235f-4a63-9023-2b87e496e6c3"
  }
}
```

---

#### Retrieve Document Metadata from Cache

- **Method:** `GET`
- **URL:** `/document-metadata/cache`
- **Description:** Retrieve cached document metadata for improved performance.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Documents Metadata Cache retrived successfully",
  "data": [
    {
      "id": "5b891ca8-c501-4ec2-8827-779e4788cd5d",
      "title": "Testing",
      "version": 0,
      "lastModified": "2024-12-03T18:04:10.057Z",
      "fileId": "674f1052a30eb739be0b5651",
      "author": {
        "name": "MR midul",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "a61e19a4-99e6-408c-a722-a46a8c8b5b14",
        "title": "Hello",
        "description": "test",
        "userId": "user_2pLMsgwdPWvMljf2XkxuqQMHoWN",
        "bookingDate": "December 5th, 2024 08:20",
        "createdAt": "2024-12-01T10:17:40.329Z",
        "updatedAt": "2024-12-01T10:17:40.329Z"
      }
    },

    {
      "id": "d826c870-2f5d-4233-a0d2-1ca2d5932fb5",
      "title": "emotion-detection_2024.pdf",
      "version": 0,
      "lastModified": "2024-12-03T10:08:04.071Z",
      "fileId": "674ed880803a6cff7a620a53",
      "author": {
        "name": "MR midul",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "dc30691c-e993-42bc-9bb2-fd6c8142136d",
        "title": "Hello",
        "description": "something",
        "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
        "bookingDate": "December 4th, 2024 06:08",
        "createdAt": "2024-12-03T10:08:00.045Z",
        "updatedAt": "2024-12-03T10:08:00.045Z"
      }
    }
  ]
}
```

---

### 2. **User Management**

#### Retrieve Authenticated User Details

- **Method:** `GET`
- **URL:** `/user`
- **Description:** Fetch the details of the currently authenticated user.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User retrived successfully",
  "data": {
    "name": "MR midul",
    "email": "moklasurrahman9797@gmail.com",
    "phone": "+880189166",
    "address": "Halishahar",
    "country": "Japan",
    "profileImage": ""
  }
}
```

---

#### Retrieve User by Email

- **Method:** `GET`
- **URL:** `/user/{{email}}`
- **Description:** Fetch a user's details by their email.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User retrived successfully",
  "data": {
    "id": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "clerkId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "name": "MR midul",
    "email": "moklasurrahman9797@gmail.com",
    "phone": "+880189166",
    "country": "Japan",
    "address": "updated address",
    "profileImage": ""
  }
}
```

---

#### Create a New User

- **Method:** `POST`
- **URL:** `/user`
- **Description:** Create a new user.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "id": "12345",
  "clerkId": "12345",
  "name": "MR Midul",
  "email": "test@testing.com",
  "phone": "111111111",
  "country": "BD",
  "address": "CTG",
  "profileImage": "base64 binary string"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "12345",
    "clerkId": "12345",
    "name": "MR Midul",
    "email": "test@testing.com",
    "phone": "111111111",
    "country": "BD",
    "address": "CTG",
    "profileImage": "base64 binary string"
  }
}
```

---

#### Update User Details

- **Method:** `PATCH`
- **URL:** `/user`
- **Description:** Update the currently authenticated user's details.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "name": "Updated Name",
  "address": "123 Updated St"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User updated successfully",
  "data": true
}
```

---

### 3. **Bookings**

#### Retrieve All Bookings

- **Method:** `GET`
- **URL:** `/booking`
- **Description:** Retrieve all bookings.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking Records retrived successfully",
  "data": [
    {
      "id": "dc30691c-e993-42bc-9bb2-fd6c8142136d",
      "title": "Hello",
      "description": "something",
      "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "bookingDate": "December 4th, 2024 06:08",
      "createdAt": "2024-12-03T10:08:00.045Z",
      "updatedAt": "2024-12-03T10:08:00.045Z"
    },
    {
      "id": "a627aa5c-862f-4f52-8470-d211b840ab1a",
      "title": "asdfa",
      "description": "adfadf",
      "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "bookingDate": "December 28th, 2024 18:08",
      "createdAt": "2024-12-01T21:06:50.011Z",
      "updatedAt": "2024-12-01T21:06:50.011Z"
    }
  ]
}
```

---

#### Create a New Booking

- **Method:** `POST`
- **URL:** `/booking`
- **Description:** Create a new booking record.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "title": "Testing",
  "description": "nothing",
  "bookingDate": "10th November, 2024 10:20",
  "documents": [
    {
      "name": "Testing",
      "size": 1223123,
      "type": "application/pdf",
      "data": "base64 binary string"
    }
  ]
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking Record created successfully",
  "data": {
    "id": "913bcc1b-0946-46aa-b283-ef8a9d83c2f5",
    "title": "Testing",
    "description": "nothing",
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "bookingDate": "10th November, 2024 10:20",
    "createdAt": "2024-12-03T18:07:18.042Z",
    "updatedAt": "2024-12-03T18:07:18.042Z"
  }
}
```

---

#### Retrieve Booking by ID

- **Method:** `GET`
- **URL:** `/booking/{{bookingId}}`
- **Description:** Fetch a booking record by its ID.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking Record retrived successfully",
  "data": {
    "id": "38af00a4-5107-4366-a6a0-41796a505455",
    "title": "Pulikidz",
    "description": "something",
    "userId": "user_2pLMsgwdPWvMljf2XkxuqQMHoWN",
    "bookingDate": "December 7th, 2024 06:33",
    "createdAt": "2024-12-03T10:32:07.600Z",
    "updatedAt": "2024-12-03T10:32:07.600Z"
  }
}
```

---

### **4. System Configuration**

#### Create System Configuration

- **Method:** `POST`
- **URL:** `/system-configuration`
- **Description:** Add a new system configuration.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "key": "darkMode",
  "value": "off"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "System Configuration created successfully",
  "data": {
    "id": "09cf15c3-40ff-4d19-93ac-b1c0f56a863f",
    "key": "darkMode",
    "value": "off",
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "updatedAt": "2024-12-03T18:39:14.926Z",
    "createdAt": "2024-12-03T18:39:14.926Z",
    "description": null
  }
}
```

---

#### Retrieve System Configurations

- **Method:** `GET`
- **URL:** `/system-configuration/{{key}}`
- **Description:** Fetch the system configuration setting with the key.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "System Configuration retrived successfully",
  "data": {
    "id": "5803bee5-630b-4fd6-8cb4-e516ee7f12b0",
    "key": "darkMode",
    "value": "on",
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "updatedAt": "2024-12-01T18:23:29.367Z",
    "createdAt": "2024-12-01T18:23:29.367Z",
    "description": null
  }
}
```

---

#### Update System Configuration

- **Method:** `PATCH`
- **URL:** `/system-configuration`
- **Description:** Update a specific system configuration by its key.
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: <your-token>`

**Body Example:**

```json
{
  "key": "darkMode",
  "value": "off"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "System Configuration updated successfully",
  "data": true
}
```

---

## **Endpoints**

### **1. Upload File**

Uploads a file to the server.

- **Method:** `POST`
- **Endpoint:** `/file/upload`
- **Headers:**
  - `Authorization: <your-token>`
- **Body:**
  - JSON: `file` (file input)

**Request Example:**

```json
{
  "name": "new file.pdf",
  "size": 1223123,
  "type": "application/pdf",
  "data": "base64 binary string"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "File uploaded successfully",
  "meta": {
    "name": "new file.pdf",
    "size": 1223123,
    "type": "application/pdf",
    "version": null
  },
  "data": {
    "name": "new file.pdf",
    "type": "application/pdf",
    "size": 1223123,
    "data": "base64 binary string",
    "author": {
      "id": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "name": "Moklasur Rahman",
      "_id": "6750158f1f598db1e6522d37"
    },
    "version": 0,
    "accessPermissions": {
      "edit": [],
      "view": [],
      "delete": [],
      "_id": "6750158f1f598db1e6522d38"
    },
    "_id": "6750158f1f598db1e6522d36",
    "createdAt": "2024-12-04T08:40:47.128Z",
    "updatedAt": "2024-12-04T08:40:47.128Z",
    "__v": 0
  }
}
```

---

### **2. Download File**

Downloads a file by its ID.

- **Method:** `GET`
- **Endpoint:** `/file/download/:fileId`
- **Headers:**
  - `Authorization: <your-token>`

**Request Example:**

```
GET /file/download/674f1052a30eb739be0b5651
```

**Response Example:**  
Binary file data for the specified `fileId`.

---

### **3. Get File Details**

Retrieves details of a specific file by its ID.

- **Method:** `GET`
- **Endpoint:** `/file/:fileId`
- **Headers:**
  - `Authorization: <your-token>`

**Request Example:**

```
GET /file/674f1052a30eb739be0b5651
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "File retrived successfully!!!",
  "meta": {
    "name": "Shohojogi SRS (221012412).pdf",
    "size": 1127228,
    "type": "application/pdf",
    "version": null
  },
  "data": {
    "_id": "674f1052a30eb739be0b5651",
    "name": "Shohojogi SRS (221012412).pdf",
    "type": "application/pdf",
    "size": 1127228,
    "data": "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8P...",
    "author": {
      "id": "user_2pLMsgwdPWvMljf2XkxuqQMHoWN",
      "name": "Mr midul",
      "_id": "674f1052a30eb739be0b5652"
    },
    "version": 0,
    "accessPermissions": {
      "edit": ["moklasurrahman9797@gmail.com"],
      "view": ["moklasurrahman9797@gmail.com"],
      "delete": [],
      "_id": "674f1052a30eb739be0b5653"
    },
    "createdAt": "2024-12-03T14:06:10.522Z",
    "updatedAt": "2024-12-03T14:08:35.712Z",
    "__v": 1
  }
}
```

---

### **4. Update File**

Updates the details of a specific file by its ID.

- **Method:** `PATCH`
- **Endpoint:** `/file/:fileId`
- **Headers:**
  - `Authorization: <your-token>`
- **Body:** JSON payload for file updates.

**Request Example:**

```json
{
  "name": "new name"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "File updated successfully",
  "data": null
}
```

---

### **5. Get Shared Files**

Retrieves a list of files that have been shared.

- **Method:** `GET`
- **Endpoint:** `/file/share`
- **Headers:**
  - `Authorization: <your-token>`

**Request Example:**

```
GET /file/share
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Shared files retrived successfully!!!",
  "data": [
    {
      "_id": "674f013aa30eb739be0b5645",
      "name": "Image-based facial emotion recognition using convolutional neural network on emognition dataset.pdf",
      "type": "application/pdf",
      "size": 4790742,
      "data": "data:application/pdf;base64......,",
      "author": {
        "id": "user_2pLMsgwdPWvMljf2XkxuqQMHoWN",
        "name": "Mr midul",
        "_id": "674f1052a30eb739be0b5652"
      },
      "version": 0,
      "accessPermissions": {
        "edit": ["moklasurrahman9797@gmail.com"],
        "view": ["moklasurrahman9797@gmail.com"],
        "delete": [],
        "_id": "674f1052a30eb739be0b5653"
      },
      "createdAt": "2024-12-03T14:06:10.522Z",
      "updatedAt": "2024-12-03T14:08:35.712Z",
      "__v": 1
    }
  ]
}
```

---

### **6. Share File**

Shares a file with specific users.

- **Method:** `PATCH`
- **Endpoint:** `/file/share`
- **Headers:**
  - `Authorization: <your-token>`
- **Body:** JSON payload specifying the file to share and the users to share it with and permission types.

**Request Example:**

```json
{
  "fileId": "674f1052a30eb739be0b5651",
  "email": "moklasurrahman9797@gmail.com",
  "types": ["edit", "view"]
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "File shared successfully!!!",
  "data": null
}
```

---

### **7. Delete File**

Deletes a file by its ID.

- **Method:** `DELETE`
- **Endpoint:** `/file/:fileId`
- **Headers:**
  - `Authorization: <your-token>`

**Request Example:**

```
DELETE /file/file_123
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "File deleted successfully!!!",
  "data": null
}
```

---

## **Endpoints**

### **1. Create Notification**

- **Method:** `POST`
- **Endpoint:** `/notification/push`
- **Description:** Create a new notification.

#### Request

**Headers:**

```json
{
  "Authorization": "<your-token>"
}
```

**Body:**

```json
{
  "message": "This is a test notification.",
  "type": "email",
  "read": false
}
```

#### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Notification pushed successfully",
  "data": {
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "type": "email",
    "message": "This is a test notification.",
    "read": false,
    "_id": "675029c806a84783d031b3f1",
    "createdAt": "2024-12-04T10:07:04.317Z",
    "updatedAt": "2024-12-04T10:07:04.317Z",
    "__v": 0
  }
}
```

---

### **2. Get Notifications from Cache**

- **Method:** `GET`
- **Endpoint:** `/notification/cache`
- **Description:** Retrieve notifications from Redis cache.

#### Request

**Headers:**

```json
{
  "Authorization": "<your-token>"
}
```

#### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Notifications Cache retrieved successfully!!!",
  "data": [
    {
      "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "type": "email",
      "message": "This is a test notification.",
      "read": false,
      "_id": "675029c806a84783d031b3f1",
      "createdAt": "2024-12-04T10:07:04.317Z",
      "updatedAt": "2024-12-04T10:07:04.317Z",
      "__v": 0
    }
  ]
}
```

---

### **3. Get Notifications**

- **Method:** `GET`
- **Endpoint:** `/notification`
- **Description:** Retrieve all notifications from the database.

#### Request

**Headers:**

```json
{
  "Authorization": "<your-token>"
}
```

#### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Notification retrieved successfully!!!",
  "data": [
    {
      "_id": "674ed885582743b4df06dd59",
      "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "type": "none",
      "message": "A new booking has been scheduled for December 4th, 2024 06:08",
      "read": false,
      "createdAt": "2024-12-03T10:08:05.081Z",
      "updatedAt": "2024-12-03T10:08:05.081Z",
      "__v": 0
    }
  ]
}
```

---

### **4. Update Notifications in Database**

- **Method:** `PATCH`
- **Endpoint:** `/notification`
- **Description:** Update a notification's status in the database.

#### Request

**Headers:**

```json
{
  "Authorization": "<your-token>"
}
```

**Body:**

```json
{
  "notificationId": "675029c806a84783d031b3f1",
  "read": true
}
```

#### Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Notification updated successfully",
  "data": null
}
```

---

# Booking Record Services Test Cases

## Overview

This document outlines comprehensive unit test cases for the BookingRecordServices methods, covering various scenarios and edge cases.

## Test Suite: createBookingRecordInDB

### Positive Test Cases

1. **Successful Booking Creation**

   - Input: Valid booking payload with document
   - Expected Outcome:
     - HTTP service posts booking successfully
     - File is uploaded to DB
     - Document metadata is created
     - Notification is sent
     - Returns booking response with success status

2. **Minimal Document Payload**
   - Input: Booking payload with minimal document details
   - Expected Outcome:
     - Booking created
     - File uploaded
     - Document metadata processed

### Negative Test Cases

3. **File Upload Failure**

   - Input: Valid booking payload
   - Simulate file upload service failure
   - Expected Outcome:
     - Booking creation rolled back
     - No residual data in database
     - Error handled gracefully

4. **Authorization Header Missing**
   - Input: Booking payload without authorization
   - Expected Outcome:
     - Request rejected
     - Appropriate error response
     - No database modifications

## Test Suite: getAllBookingRecordFromDB

### Positive Test Cases

5. **Retrieve All Bookings**

   - Input: Valid authorization token
   - Expected Outcome:
     - Successful retrieval of all bookings
     - Correct response structure
     - Non-empty booking list

6. **Empty Booking List**
   - Input: Valid authorization token
   - Simulate no bookings in system
   - Expected Outcome:
     - Successful API call
     - Empty booking list returned

### Negative Test Cases

7. **Unauthorized Access**
   - Input: Invalid or expired authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: getBookingRecordFromDB

### Positive Test Cases

8. **Retrieve Specific Booking**
   - Input: Valid booking ID, authorization token
   - Expected Outcome:
     - Correct booking details retrieved
     - Matching booking ID in response

### Negative Test Cases

9. **Non-Existent Booking ID**
   - Input: Invalid or non-existent booking ID
   - Expected Outcome:
     - Appropriate error response
     - No data returned

## Test Suite: updateBookingRecordInDB

### Positive Test Cases

10. **Successful Booking Update**
    - Input: Valid booking ID, update payload
    - Expected Outcome:
      - Booking successfully updated
      - Returned response reflects changes

### Negative Test Cases

11. **Partial Update Validation**

    - Input: Incomplete update payload
    - Expected Outcome:
      - Validate partial updates
      - Appropriate error or partial update handling

12. **Update Non-Existent Booking**
    - Input: Invalid booking ID
    - Expected Outcome:
      - Error response
      - No modifications

## Test Suite: deleteBookingRecordInDB

### Positive Test Cases

13. **Successful Booking Deletion**
    - Input: Valid booking ID
    - Expected Outcome:
      - Booking deleted
      - Confirmation response

### Negative Test Cases

14. **Delete Non-Existent Booking**
    - Input: Invalid booking ID
    - Expected Outcome:
      - Appropriate error response
      - No system state changes

# DocumentMetadataServices Test Cases

## Test Suite: createDocumentMetadataInDB

### Positive Test Cases

1. **Successful Document Metadata Creation**

   - Input: Valid document metadata payload
   - Expected Outcome:
     - Successful HTTP POST request
     - Correct response structure
     - Metadata created in database

2. **Minimal Payload Validation**
   - Input: Minimal required document metadata
   - Expected Outcome:
     - Successful creation
     - All minimal fields populated correctly

### Negative Test Cases

3. **Unauthorized Creation Attempt**
   - Input: Missing or invalid authorization token
   - Expected Outcome:
     - Request rejected
     - Appropriate error response
     - No database modifications

## Test Suite: getAllDocumentMetadataFromDB

### Positive Test Cases

4. **Retrieve All Document Metadata**

   - Input: Valid authorization
   - Expected Outcome:
     - Complete list of document metadata retrieved
     - Correct response structure
     - Non-empty metadata list

5. **Empty Metadata List**
   - Input: Valid authorization when no metadata exists
   - Expected Outcome:
     - Successful API call
     - Empty list returned

### Negative Test Cases

6. **Unauthorized Metadata Retrieval**
   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: getDocumentMetadataFromDB

### Positive Test Cases

7. **Retrieve Specific Document Metadata**
   - Input: Valid document ID, authorization
   - Expected Outcome:
     - Correct metadata retrieved
     - Matching document ID in response

### Negative Test Cases

8. **Non-Existent Document ID**
   - Input: Invalid or non-existent document ID
   - Expected Outcome:
     - Appropriate error response
     - No data returned

## Test Suite: getDocumentMetadataFromRedisCache

### Positive Test Cases

9. **Retrieve Cached Document Metadata**
   - Input: Valid authorization
   - Expected Outcome:
     - Successfully retrieve cached metadata
     - Correct response structure

### Negative Test Cases

10. **Cache Retrieval with Invalid Authorization**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - Appropriate error response

## Test Suite: getDocumentMetadataByBookingIdFromDB

### Positive Test Cases

11. **Retrieve Metadata by Booking ID**
    - Input: Valid booking ID, authorization
    - Expected Outcome:
      - Correct metadata retrieved
      - Metadata matches specified booking ID

### Negative Test Cases

12. **Non-Existent Booking ID**
    - Input: Invalid or non-existent booking ID
    - Expected Outcome:
      - Appropriate error response
      - No data returned

## Test Suite: getDocumentMetadataByFileIdFromDB

### Positive Test Cases

13. **Retrieve Metadata by File ID**
    - Input: Valid file ID, authorization
    - Expected Outcome:
      - Correct metadata retrieved
      - Metadata matches specified file ID

### Negative Test Cases

14. **Non-Existent File ID**
    - Input: Invalid or non-existent file ID
    - Expected Outcome:
      - Appropriate error response
      - No data returned

## Test Suite: updateDocumentMetadataInDB

### Positive Test Cases

15. **Successful Document Metadata Update**

    - Input: Valid document ID, update payload
    - Expected Outcome:
      - Metadata successfully updated
      - Returned response reflects changes
      - Associated file updated
      - Notification created

16. **Partial Update Validation**
    - Input: Partial update payload
    - Expected Outcome:
      - Validate partial updates
      - Appropriate update handling

### Negative Test Cases

17. **Update Non-Existent Document**
    - Input: Invalid document ID
    - Expected Outcome:
      - Error response
      - No modifications

## Test Suite: deleteDocumentMetadataInDB

### Positive Test Cases

18. **Successful Document Metadata Deletion**
    - Input: Valid document ID
    - Expected Outcome:
      - Document metadata deleted
      - Notification created
      - Confirmation response

### Negative Test Cases

19. **Delete Non-Existent Document**
    - Input: Invalid document ID
    - Expected Outcome:
      - Appropriate error response
      - No system state changes

# FileServices Test Cases

## Overview

This document provides comprehensive unit test cases for the FileServices, covering various scenarios and edge cases for each method.

## Test Suite: uploadFileInDB

### Positive Test Cases

1. **Successful File Upload**

   - Input: Valid file payload, authorization token
   - Expected Outcome:
     - Successful HTTP POST request
     - Correct response structure
     - File uploaded to database

2. **Minimal File Upload**
   - Input: Minimal required file information
   - Expected Outcome:
     - Successful file upload
     - All minimal fields populated correctly

### Negative Test Cases

3. **Unauthorized Upload Attempt**
   - Input: Missing or invalid authorization token
   - Expected Outcome:
     - Request rejected
     - Appropriate error response
     - No file stored

## Test Suite: downloadFileFromDB

### Positive Test Cases

4. **Download Existing File**
   - Input: Valid file ID, authorization
   - Expected Outcome:
     - Successful file download
     - Correct file content returned
     - Matching file metadata

### Negative Test Cases

5. **Download Non-Existent File**

   - Input: Invalid or non-existent file ID
   - Expected Outcome:
     - Appropriate error response
     - No file content returned

6. **Unauthorized File Download**
   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: getFileByIdFromDB

### Positive Test Cases

7. **Retrieve Specific File Metadata**
   - Input: Valid file ID, authorization
   - Expected Outcome:
     - Correct file metadata retrieved
     - Matching file ID in response

### Negative Test Cases

8. **Non-Existent File ID**
   - Input: Invalid or non-existent file ID
   - Expected Outcome:
     - Appropriate error response
     - No data returned

## Test Suite: getFilesByUserIdFromDB

### Positive Test Cases

9. **Retrieve User's Files**

   - Input: Valid authorization
   - Expected Outcome:
     - Complete list of user's files retrieved
     - Correct response structure
     - Non-empty file list

10. **Empty File List**
    - Input: Valid authorization when no files exist
    - Expected Outcome:
      - Successful API call
      - Empty list returned

### Negative Test Cases

11. **Unauthorized File Retrieval**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - Appropriate error response

## Test Suite: updateOneFileInDB

### Positive Test Cases

12. **Successful File Update**

    - Input: Valid file ID, update payload
    - Expected Outcome:
      - File metadata successfully updated
      - Returned response reflects changes

13. **Partial Update Validation**
    - Input: Partial update payload
    - Expected Outcome:
      - Validate partial updates
      - Appropriate update handling

### Negative Test Cases

14. **Update Non-Existent File**
    - Input: Invalid file ID
    - Expected Outcome:
      - Error response
      - No modifications

## Test Suite: deleteFileByIdFromDB

### Positive Test Cases

15. **Successful File Deletion**
    - Input: Valid file ID
    - Expected Outcome:
      - File deleted from database
      - Confirmation response

### Negative Test Cases

16. **Delete Non-Existent File**
    - Input: Invalid file ID
    - Expected Outcome:
      - Appropriate error response
      - No system state changes

## Test Suite: shareFileInDB

### Positive Test Cases

17. **Successful File Sharing**
    - Input: Valid file details, recipient email
    - Expected Outcome:
      - File shared successfully
      - Recipient user verified
      - Sharing metadata updated

### Negative Test Cases

18. **Share with Non-Existent User**

    - Input: Invalid or non-existent email
    - Expected Outcome:
      - User verification fails
      - Appropriate error response

19. **Unauthorized File Sharing**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - Sharing request rejected

## Test Suite: getAllSharedFilesByUserIdFromDB

### Positive Test Cases

20. **Retrieve Shared Files**
    - Input: Valid authorization
    - Expected Outcome:
      - List of shared files retrieved
      - Correct response structure
      - Non-empty shared files list

### Negative Test Cases

21. **Unauthorized Shared Files Retrieval**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - Appropriate error response

# NotificationServices Test Cases

## Overview

This document provides comprehensive unit test cases for the NotificationServices, covering various scenarios and edge cases for each method.

## Test Suite: createNotificationInDB

### Positive Test Cases

1. **Successful Notification Creation**

   - Input: Valid notification payload
   - Expected Outcome:
     - Successful HTTP POST request
     - Correct response structure
     - Notification created in database

2. **Minimal Notification Payload**
   - Input: Minimal required notification information
   - Expected Outcome:
     - Successful notification creation
     - All minimal fields populated correctly

### Negative Test Cases

3. **Unauthorized Notification Creation**

   - Input: Missing or invalid authorization token
   - Expected Outcome:
     - Request rejected
     - Appropriate error response
     - No notification stored

4. **Invalid Notification Payload**
   - Input: Incomplete or malformed notification data
   - Expected Outcome:
     - Request validation failure
     - Appropriate error response

## Test Suite: getAllNotificationByUserIdFromDB

### Positive Test Cases

5. **Retrieve User Notifications**

   - Input: Valid authorization token
   - Expected Outcome:
     - Complete list of user notifications retrieved
     - Correct response structure
     - Non-empty notification list

6. **Empty Notification List**
   - Input: Valid authorization when no notifications exist
   - Expected Outcome:
     - Successful API call
     - Empty list returned

### Negative Test Cases

7. **Unauthorized Notification Retrieval**
   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: getNotificationsFromRedisCache

### Positive Test Cases

8. **Retrieve Cached Notifications**
   - Input: Valid authorization token
   - Expected Outcome:
     - Successfully retrieve cached notifications
     - Correct response structure
     - Matching cached content

### Negative Test Cases

9. **Cache Retrieval with Invalid Authorization**

   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

10. **Empty Redis Cache**
    - Input: Valid authorization when cache is empty
    - Expected Outcome:
      - Successful API call
      - Empty list or appropriate response

## Notification Scenarios to Test

### Types of Notifications

11. **Different Notification Types**
    - Test scenarios for various notification types:
      - System notifications
      - User-specific notifications
      - Event-based notifications
      - Email notifications
      - In-app notifications

### Notification Attributes

12. **Notification Attribute Validation**
    - Test cases covering:
      - Read/Unread status
      - Timestamp accuracy
      - Notification priority
      - Notification content integrity

# SystemConfigurationServices Test Cases

## Overview

This document provides comprehensive unit test cases for the SystemConfigurationServices, covering various scenarios and edge cases for each method.

## Test Suite: createSystemConfigurationInDB

### Positive Test Cases

1. **Successful System Configuration Creation**

   - Input: Valid system configuration payload
   - Expected Outcome:
     - Successful HTTP POST request
     - Correct response structure
     - Configuration created in database

2. **Minimal Configuration Payload**
   - Input: Minimal required configuration information
   - Expected Outcome:
     - Successful configuration creation
     - All minimal fields populated correctly

### Negative Test Cases

3. **Unauthorized Configuration Creation**

   - Input: Missing or invalid authorization token
   - Expected Outcome:
     - Request rejected
     - Appropriate error response
     - No configuration stored

4. **Duplicate Configuration Key**
   - Input: Configuration with existing key
   - Expected Outcome:
     - Prevent duplicate key creation
     - Appropriate error response

## Test Suite: getSystemConfigurationFromDB

### Positive Test Cases

5. **Retrieve Specific Configuration**

   - Input: Valid configuration key, authorization
   - Expected Outcome:
     - Correct configuration retrieved
     - Matching configuration key in response

6. **Retrieve Different Configuration Types**
   - Test scenarios for various configuration types:
     - String configurations
     - Numeric configurations
     - Boolean configurations
     - Complex object configurations

### Negative Test Cases

7. **Non-Existent Configuration Key**

   - Input: Invalid or non-existent configuration key
   - Expected Outcome:
     - Appropriate error response
     - No data returned

8. **Unauthorized Configuration Retrieval**
   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: updateSystemConfigurationInDB

### Positive Test Cases

9. **Successful Configuration Update**

   - Input: Valid update payload
   - Expected Outcome:
     - Configuration successfully updated
     - Returned response reflects changes

10. **Partial Configuration Update**

    - Input: Partial update payload
    - Expected Outcome:
      - Validate partial updates
      - Appropriate update handling

11. **Update Different Configuration Types**
    - Test updating:
      - String values
      - Numeric values
      - Boolean flags
      - Complex configuration objects

### Negative Test Cases

12. **Update with Invalid Payload**

    - Input: Malformed or incorrect update data
    - Expected Outcome:
      - Request validation failure
      - Appropriate error response

13. **Unauthorized Configuration Update**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - No configuration modifications

## Configuration Validation Scenarios

### Configuration Constraints

14. **Configuration Constraint Validation**
    - Test scenarios covering:
      - Value range restrictions
      - Type validations
      - Required vs. optional fields
      - Default value handling

### Security Considerations

15. **Security-Sensitive Configurations**
    - Test handling of:
      - Sensitive configuration updates
      - Permissions-based configuration access
      - Audit logging for configuration changes

# SystemConfigurationServices Test Cases

## Overview

This document provides comprehensive unit test cases for the SystemConfigurationServices, covering various scenarios and edge cases for each method.

## Test Suite: createSystemConfigurationInDB

### Positive Test Cases

1. **Successful System Configuration Creation**

   - Input: Valid system configuration payload
   - Expected Outcome:
     - Successful HTTP POST request
     - Correct response structure
     - Configuration created in database

2. **Minimal Configuration Payload**
   - Input: Minimal required configuration information
   - Expected Outcome:
     - Successful configuration creation
     - All minimal fields populated correctly

### Negative Test Cases

3. **Unauthorized Configuration Creation**

   - Input: Missing or invalid authorization token
   - Expected Outcome:
     - Request rejected
     - Appropriate error response
     - No configuration stored

4. **Duplicate Configuration Key**
   - Input: Configuration with existing key
   - Expected Outcome:
     - Prevent duplicate key creation
     - Appropriate error response

## Test Suite: getSystemConfigurationFromDB

### Positive Test Cases

5. **Retrieve Specific Configuration**

   - Input: Valid configuration key, authorization
   - Expected Outcome:
     - Correct configuration retrieved
     - Matching configuration key in response

6. **Retrieve Different Configuration Types**
   - Test scenarios for various configuration types:
     - String configurations
     - Numeric configurations
     - Boolean configurations
     - Complex object configurations

### Negative Test Cases

7. **Non-Existent Configuration Key**

   - Input: Invalid or non-existent configuration key
   - Expected Outcome:
     - Appropriate error response
     - No data returned

8. **Unauthorized Configuration Retrieval**
   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: updateSystemConfigurationInDB

### Positive Test Cases

9. **Successful Configuration Update**

   - Input: Valid update payload
   - Expected Outcome:
     - Configuration successfully updated
     - Returned response reflects changes

10. **Partial Configuration Update**

    - Input: Partial update payload
    - Expected Outcome:
      - Validate partial updates
      - Appropriate update handling

11. **Update Different Configuration Types**
    - Test updating:
      - String values
      - Numeric values
      - Boolean flags
      - Complex configuration objects

### Negative Test Cases

12. **Update with Invalid Payload**

    - Input: Malformed or incorrect update data
    - Expected Outcome:
      - Request validation failure
      - Appropriate error response

13. **Unauthorized Configuration Update**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - No configuration modifications

## Configuration Validation Scenarios

### Configuration Constraints

14. **Configuration Constraint Validation**
    - Test scenarios covering:
      - Value range restrictions
      - Type validations
      - Required vs. optional fields
      - Default value handling

### Security Considerations

15. **Security-Sensitive Configurations**
    - Test handling of:
      - Sensitive configuration updates
      - Permissions-based configuration access
      - Audit logging for configuration changes

# UserServices Test Cases

## Overview

This document provides comprehensive unit test cases for the UserServices, covering various scenarios and edge cases for each method.

## Test Suite: createUserInDB

### Positive Test Cases

1. **Successful User Creation**

   - Input: Valid user registration payload
   - Expected Outcome:
     - Successful HTTP POST request
     - Correct response structure
     - User created in database

2. **Minimal User Registration**
   - Input: Minimal required user information
   - Expected Outcome:
     - Successful user creation
     - All minimal fields populated correctly

### Negative Test Cases

3. **Duplicate User Registration**

   - Input: User payload with existing email
   - Expected Outcome:
     - Registration prevented
     - Appropriate error response

4. **Invalid User Payload**
   - Input: Incomplete or malformed user data
   - Expected Outcome:
     - Request validation failure
     - Appropriate error response

## Test Suite: getUserFromDB

### Positive Test Cases

5. **Retrieve User Profile**
   - Input: Valid authorization token
   - Expected Outcome:
     - User profile retrieved successfully
     - Correct response structure
     - Comprehensive user information

### Negative Test Cases

6. **Unauthorized User Retrieval**
   - Input: Invalid or missing authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: getUserByEmailFromDB

### Positive Test Cases

7. **Retrieve User by Email**
   - Input: Valid email, authorization token
   - Expected Outcome:
     - User details retrieved
     - Matching email in response
     - Correct user information

### Negative Test Cases

8. **Non-Existent Email**

   - Input: Invalid or non-existent email
   - Expected Outcome:
     - Appropriate error response
     - No user data returned

9. **Unauthorized Email Lookup**
   - Input: Invalid authorization token
   - Expected Outcome:
     - Access denied
     - Appropriate error response

## Test Suite: updateUserInDB

### Positive Test Cases

10. **Successful User Update**

    - Input: Valid update payload
    - Expected Outcome:
      - User profile successfully updated
      - Returned response reflects changes

11. **Partial Profile Update**
    - Input: Partial user information update
    - Expected Outcome:
      - Validate partial updates
      - Unspecified fields remain unchanged

### Negative Test Cases

12. **Update with Invalid Data**

    - Input: Malformed or incorrect update payload
    - Expected Outcome:
      - Request validation failure
      - Appropriate error response

13. **Unauthorized User Update**
    - Input: Invalid authorization token
    - Expected Outcome:
      - Access denied
      - No profile modifications

## Comprehensive User Scenario Testing

### User Profile Variations

14. **User Profile Attribute Validation**
    - Test scenarios covering:
      - Different user roles
      - Profile completeness checks
      - Required vs. optional fields
      - Data type validations

### Security Considerations

15. **User Data Security Checks**
    - Test handling of:
      - Sensitive information protection
      - Password update mechanisms
      - Access control for different user roles

## Recommended Testing Frameworks

- Jest
- Sinon.js for mocking
- Chai for assertions

## Sample Test Structure (Pseudocode)

```typescript
describe('BookingRecordServices', () => {
  beforeEach(() => {
    // Setup mocks
  });

  it('should create booking record successfully', async () => {
    // Test implementation
  });

  // More test cases...
});
```
