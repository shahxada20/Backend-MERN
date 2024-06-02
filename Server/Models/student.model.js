import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: [true, "Email already present"],
            validator(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid Email")
                }
            }, message: "Invalid Email"
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
    }, { timestamps: true }
)

export const Student = mongoose.model("Student", studentSchema);