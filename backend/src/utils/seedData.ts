import User from "../models/User";

export const seedDatabase = async () => {
  try {
    // Check if admin user exists
    const adminExists = await User.findOne({ email: "admin@hrms.com" });
    
    if (!adminExists) {
      // Create default admin user
      const adminUser = new User({
        email: "admin@hrms.com",
        password: "admin123",
        name: "Admin User",
        role: "admin"
      });
      await adminUser.save();
      console.log("✅ Admin user created: admin@hrms.com / admin123");
    }

    // Check if HR user exists
    const hrExists = await User.findOne({ email: "hr@hrms.com" });
    
    if (!hrExists) {
      // Create default HR user
      const hrUser = new User({
        email: "hr@hrms.com",
        password: "hr123",
        name: "HR Manager",
        role: "hr"
      });
      await hrUser.save();
      console.log("✅ HR user created: hr@hrms.com / hr123");
    }

    // Create test user for frontend
    const testExists = await User.findOne({ email: "test@example.com" });
    
    if (!testExists) {
      const testUser = new User({
        email: "test@example.com",
        password: "yourpassword",
        name: "Test User",
        role: "employee"
      });
      await testUser.save();
      console.log("✅ Test user created: test@example.com / yourpassword");
    }

  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};