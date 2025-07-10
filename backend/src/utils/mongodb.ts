// src/utils/mongodb.ts

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URI =
      "mongodb+srv://hariprasadam1437:Hari1434@hrms.qec7loq.mongodb.net/";

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};
