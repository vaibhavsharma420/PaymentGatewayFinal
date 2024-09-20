import { ContactForm } from "../models/contact.js";
import axios from "axios"

export const post = async (req, res) => {
    try {
        const {
            school, choice, address, name, email, 
            namecordi, numbercordi, nameescort, 
            numberescort, state, city
        } = req.body;

        const KEY_ID = process.env.RAZORPAY_API_KEY
const KEY_SECRET = process.env.RAZORPAY_API_SECRET
        // Create a new instance of ContactForm with the received data
        const newContact = new ContactForm({
            school, choice, address, name, email, 
            namecordi, numbercordi, nameescort, 
            numberescort, state, city
        });

        // Save the new contact to the database
        await newContact.save();
        const payment_details = await axios.post("https://api.razorpay.com/v1/payment_links/",{
            "amount": 100000,
            "currency": "INR",
            "accept_partial": false,
            "expire_by": null,
            "reference_id": null,
            "description": "Payment for Youth Festival+ 2024",
            "customer": {
              "name": "test",
              "contact": "+918849584958",
              "email": "test@test.com"
            },
            "notify": {
              "sms": true,
              "email": true
            },
            "reminder_enable": true,
            "notes": {
              "policy_name": "Youth Fest+ Registration"
            },
            "callback_url": "http://icbt20.com/thank-you",
            "callback_method": "get"
          },{ auth: {
            username: KEY_ID,
            password: KEY_SECRET
        }})
        console.log("payment details", payment_details)
        // If save is successful, send a success response
        res.status(200).json({ message: "Data Saved" , payment_url: payment_details.data.short_url});
    } catch (error) {
        // Handle any errors and send an appropriate error response
        console.log("error",error)
        res.status(400).json({ message: "Error Occurred", error });
    }
};