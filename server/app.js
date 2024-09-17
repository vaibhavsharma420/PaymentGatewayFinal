import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
import cors from "cors";

config({path:"./config/config.env"});

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", paymentRoute);
app.use("/api/v1",contactRoute);
app.get("/api/getkey",(req,res)=>{
    res.status(200).json({key: process.env.RAZORPAY_API_KEY});
})