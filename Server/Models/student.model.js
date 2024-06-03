import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";


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
        password: {
            type: String,
            required: true,
            minlength: [8, "password must contain at least 8 characters"]
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
)


studentSchema.pre('save', async function(next){
    const user = this;
    if (!user.isModified("password")){
        return next();
    }
    try {
        const hash_password = await bcrypt.hash(user.password, 10);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})

export const Student = mongoose.model("Student", studentSchema);