import { ContactForm } from "../models/contact.js";

export const post = async (req, res) => {
    try {
        const {
            school, choice, address, name, email, 
            namecordi, numbercordi, nameescort, 
            numberescort, state, city
        } = req.body;

        // Create a new instance of ContactForm with the received data
        const newContact = new ContactForm({
            school, choice, address, name, email, 
            namecordi, numbercordi, nameescort, 
            numberescort, state, city
        });

        // Save the new contact to the database
        await newContact.save();

        // If save is successful, send a success response
        res.status(200).json({ message: "Data Saved" });
    } catch (error) {
        // Handle any errors and send an appropriate error response
        res.status(400).json({ message: "Error Occurred", error });
    }
};