import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../../models/Contactformmodel"; // Adjust the import path as necessary

export const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid email or password" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ success: false, message: "Invalid email or password" });
  }
  return res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
  });
};
