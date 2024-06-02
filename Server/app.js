import express from "express";
import dotenv from "dotenv";
import { router } from "./Routes/studentRoutes.js";

dotenv.config({ path: './.env' })

const app = express();

app.use(express.json());    // middleware - JSON parser
app.use(router)

export default app;