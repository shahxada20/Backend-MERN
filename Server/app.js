import express from "express";
import dotenv from "dotenv";
import { router } from "./Routes/studentRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: './.env' })

const app = express();

// Define path to static files
const static_path = path.join(path.dirname(fileURLToPath(import.meta.url)), "./Public");

app.use(express.json());    // middleware to parse JSON bodies
app.use(router)     // middleware to serve API requests

export default app;