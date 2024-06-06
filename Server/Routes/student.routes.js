import express from "express";
import signupSchema from "../Validator/authValidator.js";
import validate from "../Middlewares/validate.middleware.js";

import {
    home,
    registerUser,
    deleteStudent,
    getAllStudents,
    getStudentById,
    getStudentByName,
    patchStudent,
    updateStudent,
    login,
} from "../Controllers/student.controller.js"


export const router = new express.Router();

router.get("/", home)
router.post("/register", validate(signupSchema), registerUser);     // create a new user
router.post("/login", login);     // user login 
router.get("/student", getAllStudents);     // Get all users
router.get("/student/:id", getStudentById);   // Get user by id
router.get("/student/name/:name", getStudentByName);     // Get user by Name
router.delete("/student/:id", deleteStudent);    // Delete user by id
router.patch("/student/:id", patchStudent);     // patch an existing user data
router.put("/student/:id", updateStudent);    // update all data of existing user