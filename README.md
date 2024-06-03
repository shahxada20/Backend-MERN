# Project: MERN Stack Project: 01

### RESTful API Project

This project is a RESTful API built with Node.js, Express, and MongoDB. It provides endpoints for managing student data, including creating, reading, updating, and deleting student records.

#### Table of Contents

- [Prerequisites](###prerequisites)
- [Project Structure](###project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- node.js
- npm
- express
- nodemon
- Mongoose
- dotenv

## Project Structure

The project is structured as follows:

RestfulAPI/
├── Server/
│ ├── Controllers/
│ │ └── `studentController.js`
│ ├── DB/
│ │ └── `connection.js`
│ ├── Models/
│ │ └── `student.model.js`
│ ├──Public/
│ ├── Routes/
│ │ └── `studentRoutes.js`
│ ├── `app.js`
│ └── `server.js`
├── `.env`
├── `.gitignore`
├── `package.json`
├── `package-lock.json`
└── `README.md`

## Environment Variables

Create a `.env` file in the root directory to store environment variables such as the port number and MongoDB URI.



- 400 Bad Request
- 404 Not Found
- 409 Conflict
- 500 Internal Server Error