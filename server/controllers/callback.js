// const models = require('../models/index');
import { ContactForm } from "../models/contact.js";
// require('dotenv').config();
import {validateWebhookSignature} from 'razorpay/dist/utils/razorpay-utils.js'

export const callback = async (req, res) => {
  
  try {    
      const callbackData = req.body
      console.log(callbackData)
      // const webhookSignature = req.headers['x-razorpay-signature'];
      // const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET // TODO: from razorpay
      // validateWebhookSignature(JSON.stringify(callbackData), webhookSignature, webhookSecret)
      console.log("callbackdata", callbackData.payload.payment_link.entity)
      console.log("callbackdata2", callbackData.payload.payment_link.entity.customer.email, callbackData.payload.payment_link.entity.status)
     const oldUser = await ContactForm.findOne({
         email: callbackData.payload.payment_link.entity.customer.email
       });
    //TODO: get data from your mongo db based on email or related data
       console.log("olduser",oldUser)
      let paymentStatus = callbackData.payload.payment_link.entity.status
      let updateStatus
      if (paymentStatus == "paid") {                          
        updateStatus = "payment Complete"
      } else {
        updateStatus = "pending"
      }
       const test = await ContactForm.updateOne(
  { email: callbackData.payload.payment_link.entity.customer.email }, // Query to find the document
  { $set: { fee_paid_status: updateStatus } } // Update operation
);
       console.log("test",test)
    //TODO: update paymentStatus to oldUser on mongoDB
      res.status(200).json({message: "completed"})
    }
    catch (error) {
    console.log("error",error)
    res.status(500).json({ message: "Something went wrong" });
  }
};
