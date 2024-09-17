import express from "express";
import { post } from "../controllers/contactController.js";

const router = express.Router();

router.route("/post").post(post);

export default router;