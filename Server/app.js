import express from "express";
import dotenv from "dotenv";
import { router } from "./Routes/student.routes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: './.env' })

const app = express();
app.use(express.json());    // middleware to parse JSON bodies
app.use("/api", router)     // middleware to serve API requests

// Define path to static files
const static_path = path.join(path.dirname(fileURLToPath(import.meta.url)), "./Public");

export default app;