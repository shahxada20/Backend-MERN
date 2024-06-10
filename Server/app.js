import express from "express";
import dotenv from "dotenv";
import { router } from "./Routes/student.routes.js";
import cors from "cors";

dotenv.config({ path: './.env' })

const app = express();

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: "true"
};

app.use(express.json());    // middleware to parse JSON bodies
app.use(cors())     // handling cors policy
app.use("/api", router)     // middleware to serve API requests


export default app;