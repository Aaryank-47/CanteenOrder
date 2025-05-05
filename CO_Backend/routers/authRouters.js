import express from "express";
import {signup,login,logout,forgotPassword,resetPassword} from "../Controllers/authControls.js"
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get((req,res)=>{
    res.send('Get all users');
})

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword").post(resetPassword);
router.route("/user").get(authMiddleware,(req,res)=>{
    res.status(200).json({message:"User profile",user:req.user})
})


export default router;