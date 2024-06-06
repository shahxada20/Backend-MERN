# Project: MERN Stack Project: 01

### RESTful API Project

This project is a RESTful API built with Node.js, Express, and MongoDB. It provides endpoints for managing user data, including CRUD operations.

## Prerequisites

Before you begin, ensure you have met the following dependencies requirements:

- node.js
- npm
- express
- nodemon
- Mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- validator
- zod

## Environment Variables

Create a `.env` file in the root directory to store environment variables such: 
- PORT
- MONGODB URI
- ACCESS_TOKEN_SECRET
- ACCESS_TOKEN_EXPIRY


## HTTP codes used
- 200: OK
- 201: Created
- 202: Accepted
- 400: Bad Request
- 401: Unautorized
- 404: Not Found
- 406: Not Acceptable
- 409: Conflict / Duplicate key Error
- 500: Internal Server Error