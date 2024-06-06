import { Contact } from "../Models/contact.model.js"

export const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message: "message send successfully"})
    } catch (error) {
        res.status(500).send({message: "message not delivered"})
    }
}