import express from "express";
import { login, register, forgotPassword, verifyOTP, resetPassword } from "../controllers/authController";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);

export default router;