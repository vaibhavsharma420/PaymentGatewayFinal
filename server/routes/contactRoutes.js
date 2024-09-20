import express from "express";
import { post } from "../controllers/contactController.js";
import {callback} from "../controllers/callback.js"

const router = express.Router();

router.route("/post").post(post);
router.route("/callback").post(callback)

export default router;