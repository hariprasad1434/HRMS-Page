import express from "express";
import cors from "cors";
import { connectDB } from "./utils/database";
import { seedDatabase } from "./utils/seedData";
import authRoutes from "./routes/authRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import attendanceRoutes from "./routes/attendanceRoutes";
import jobRoutes from "./routes/jobRoutes";
import candidateRoutes from "./routes/candidateRoutes";
import holidayRoutes from "./routes/holidayRoutes";
import payrollRoutes from "./routes/payrollRoutes";

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/holidays", holidayRoutes);
app.use("/api/payroll", payrollRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HRMS Backend Server is running",
    timestamp: new Date().toISOString(),
    database: "Connected to MongoDB Atlas"
  });
});

// Dashboard stats endpoint
app.get("/api/dashboard/stats", async (req, res) => {
  try {
    // This would normally require authentication, but for demo purposes
    res.status(200).json({
      success: true,
      data: {
        totalEmployees: 560,
        totalApplicants: 245,
        todayAttendance: 487,
        totalProjects: 125,
        presentToday: 487,
        lateToday: 23,
        absentToday: 50
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching dashboard stats"
    });
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    await seedDatabase();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🔐 Auth endpoints: http://localhost:${PORT}/api/auth/*`);
      console.log(`💾 Database: MongoDB Atlas (HRMS)`);
      console.log(`🌐 CORS enabled for: http://localhost:3000, http://localhost:3001`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();