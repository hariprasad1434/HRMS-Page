import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
  joiningDate: { type: Date, required: true },
  salary: { type: Number, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  employeeType: { type: String, enum: ['permanent', 'temporary', 'contract'], default: 'permanent' },
  workLocation: { type: String, enum: ['office', 'remote', 'hybrid'], default: 'office' },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  personalInfo: {
    dateOfBirth: Date,
    gender: String,
    maritalStatus: String,
    nationality: String
  },
  documents: [{
    type: String,
    filename: String,
    path: String,
    uploadDate: { type: Date, default: Date.now }
  }],
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.model("Employee", employeeSchema);