import { Student } from "../Models/student.model.js";


export const home = async (req, res)=> {
    try {
        res.status(200).send("Server is up and running") 
    } catch (error) {
        res.status(400).send(error) 
    }}

// create a new student
export const createStudent = async (req, res) => {
    try {
        const user = new Student(req.body);
        await user.save();
        res.status(201).send({message: "new user created",user});
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code
            res.status(409).send({ message: "user email already exists" });
        } else {
            res.status(500).send({ error: "something went wrong", details: error });
        }
    }
}


// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.status(200).send(studentsData)
    } catch (error) {
        res.status(500).send(error)
    }
}


// Get Student by id
export const getStudentById = async (req, res) => {
    try {
        const indivStudent = await Student.findByIdAndUpdate(req.params.id)
        if (!indivStudent) {
            res.status(404).send({ error: "user not registered" });
        } else {
            res.status(202).send(indivStudent)
        }
    } catch (error) {
        res.status(500).send({ error: "an error occurred while fetching data", details: error })
    }
}


// Get Student by Name
export const getStudentByName = async (req, res) => {
    try {
        const nameStudent = await Student.findOne({ name: req.params.name })
        if (!nameStudent) {
            res.status(404).send({ error: "user not registered" });
        } else {
            res.status(202).send(nameStudent)
        }
    } catch (error) {
        res.status(500).send({ error: "an error occured while fetching data", details: error })
    }
}


// Delete student by id
export const deleteStudent = async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (!deleteStudent) {
            res.status(400).send({message: "user not registered or already deleted"});
        } else {
            res.status(200).send({message: "user deleted"})
        }
    } catch (error) {
        res.status(500).send(error, { error: "an error occured while fetching data", details: error })
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
            res.status(406).send({ message: "user not available" })
        } else {
            res.status(202).send(patchStudent)
        }
    } catch (error) {
        res.status(500).send({ error: "an error occurred while updating" })
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
            res.status(406).send({ message: "Student not available" })
        } else {
            res.status(202).send(updateStudent)
        }
    } catch (error) {
        res.status(500).send({ message: "an error occurred while updating" })
    }
}
