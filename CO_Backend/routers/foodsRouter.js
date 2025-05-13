import { getFoodMenu } from "../Controllers/foodMenuControl.js";
import express from "express";

const router = express.Router();

router.route("/menu").get(getFoodMenu);

export default router;
