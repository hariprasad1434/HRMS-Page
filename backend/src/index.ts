import express from "express";
import cors from "cors";
import { connectDB } from "./utils/mongodb";
import authRouter from "./api/routers/Contactrouters"; // ✅ Adjust to your actual file name

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter); // ✅ Will map to /api/auth/login

connectDB(); // Connect MongoDB

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
