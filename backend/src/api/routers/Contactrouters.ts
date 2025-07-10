import express from "express";
import { loginHandler } from "../controllers/contactformcontroler"; // make sure name & path match

const router = express.Router();

// Use loginHandler here — NOT a wrongly imported 'User'
router.post("/login", loginHandler);

export default router;
