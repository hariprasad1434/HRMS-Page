import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URI = "mongodb+srv://hariprasadam1437:Hari1434@hrms.qec7loq.mongodb.net/hrms";
    
    await mongoose.connect(MONGO_URI, {
      dbName: 'hrms' // Explicitly set database name
    });
    console.log("✅ MongoDB connected successfully to HRMS database");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};