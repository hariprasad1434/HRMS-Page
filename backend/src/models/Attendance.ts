import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  checkIn: { type: Date },
  checkOut: { type: Date },
  status: { 
    type: String, 
    enum: ['present', 'absent', 'late', 'half-day'], 
    default: 'present' 
  },
  workType: { 
    type: String, 
    enum: ['office', 'remote'], 
    default: 'office' 
  },
  totalHours: { type: Number, default: 0 },
  overtimeHours: { type: Number, default: 0 },
  notes: String,
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
}, {
  timestamps: true
});

attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

export default mongoose.model("Attendance", attendanceSchema);