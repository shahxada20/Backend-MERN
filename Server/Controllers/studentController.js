import { Student } from "../Models/student.model.js";


// create a new student
export const createStudent = async (req, res) => {
    try {
        const user = new Student(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code
            res.status(409).send({ message: "Student email already exists" });
        } else {
            res.status(400).send({ error: "An error occurred", details: error });
        }
    }
}


// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.send(studentsData)
    } catch (error) {
        res.status(500).send(error)
    }
}


// Get Student by id
export const getStudentById = async (req, res) => {
    try {
        const indivStudent = await Student.findByIdAndUpdate(req.params.id)
        if (!indivStudent) {
            res.status(404).send({ error: "Student not found" });
        } else {
            res.status(201).send(indivStudent)
        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred", details: error })
    }
}


// Get Student by Name
export const getStudentByName = async (req, res) => {
    try {
        const nameStudent = await Student.findOne({ name: req.params.name })
        if (!nameStudent) {
            res.status(404).send({ error: "Student not found" });
        } else {
            res.status(201).send(nameStudent)
        }
    } catch (error) {
        res.status(500).send({ error: "An error occured while fetching data", details: error })
    }
}


// Delete student by id
export const deleteStudent = async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (!deleteStudent) {
            res.status(404).send();
        } else {
            res.status(201).send(deleteStudent)
        }
    } catch (error) {
        res.status(500).send(error, { error: "An error occured", details: error })
    }
}


// patch an existing Student data
export const patchStudent = async (req, res) => {
    try {
        const patchStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!patchStudent) {
            res.status(404).send({ message: "Student not available" })
        } else {
            res.status(200).send(patchStudent)
        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred while updating the student" })
    }
}


// complete update an existing Student data
export const updateStudent = async (req, res) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updateStudent) {
            res.status(404).send({ message: "Student not available" })
        } else {
            res.status(200).send(updateStudent)
        }
    } catch (error) {
        res.status(500).send({ message: "Something went wrong" })
    }
}
