import express from "express";

import {
    home,
    createStudent,
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
router.post("/register", createStudent);     // create a new student
router.post("/login", login);     // create a new student
router.get("/student", getAllStudents);     // Get all students
router.get("/student/:id", getStudentById);   // Get Student by id
router.get("/student/name/:name", getStudentByName);     // Get Student by Name
router.delete("/student/:id", deleteStudent);    // Delete student by id
router.patch("/student/:id", patchStudent);     // patch an existing Student data
router.put("/student/:id", updateStudent);    // complete update an existing Student data
