import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true,
    },
    choice: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        
    },
    namecordi: {
        type: String,
        required: true,
    },
    numbercordi: {
        type: String,  // Changed to String for flexibility
        required: true,
    },
    nameescort: {
        type: String,
        required: true,
    },
    numberescort: {
        type: String,  // Changed to String for flexibility
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    fee_paid_status: {
        type: String,
        required: false,
        default: "Pending"
    }
});

export const ContactForm = mongoose.model("Contact", contactSchema);