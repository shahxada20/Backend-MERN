import {z}  from "zod";

const contactSchema = z.object({
    name: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(32, {message: "Name must not be more than 32 characters"}),
    email: z
        .string({ require_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email Address" })
        .max(32, {message: "Email must not be more than 32 characters"}),
    // phone: z
    //     .string({message: "Phone is required"})
    //     .trim()
    //     .min(10,{ message: "Phone must be at least 10 characters"})
    //     .max(13, {message: "Phone must not be more than 13 characters"}),
    message: z
        .string({message: "Message is required"})
        .min(8,{ message: "Message must be at least 8 characters"})
        .max(2048, {message: "Message can't be more than 2048 characters"}),   
    }
)

export default contactSchema;