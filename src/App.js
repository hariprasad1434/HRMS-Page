import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Password from "./Components/Login/Password";
import OTP from "./Components/Login/OTP";
import Success from "./Components/Login/Success";
import Dashboard from"./Pages/Dasboard.jsx";
import AllAttendance from "./Components/Dash/All-Attendance.jsx";
import AllEmployees from "./Pages/AllEmployees.jsx"
import AddEmployee from "./Components/Employees/AddEmployee.jsx";
import ProfessionalInfo from "./Components/Employees/ProfessionalInfo.jsx";
import Personalinfo from "./Components/Employees/Personalinfo.jsx";
import AllDepartment from "./Pages/AllDepartment.jsx";
import EmployeeTable from "./Components/Employees/EmployeeTable.jsx";
import Attendence from "./Pages/Attendence.jsx";
import PayRoll from "./Pages/Payroll.jsx";
import Job from "./Pages/Jobs.jsx";
import AddNewJob from "./Components/Jobs/AddNewJob.jsx";
import CandidateTable from "./Components/Candidate/CandidateTable.jsx";
import Settings from "./Components/Settings/SettingPanel.jsx";
import HolidayList from "./Components/Leaves/HolidayList.jsx";
import AddHoliday from "./Components/Leaves/AddHoliday.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<Password />} />
        <Route path="/verify-otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
        <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/all-attendance" element={<AllAttendance />} />
         <Route path="/All-Employees" element={<AllEmployees />} />
         <Route path="/add-employee" element={<AddEmployee />} />
         <Route path="/NEXT" element={<Personalinfo />} />
         <Route path="/professional" element={<ProfessionalInfo />} />
         <Route path="/all-department" element={<AllDepartment/>} />
        <Route path="/EmployeeTable" element={<EmployeeTable />} />
      <Route path="/attendance" element={<Attendence />} />
          <Route path="/payroll" element={<PayRoll />} />
        <Route path="/jobs" element={<Job/>} />
        {/* <Route path="/add-new-job" element={<AddNewJob />} /> */}
        <Route path="/candidates" element={<CandidateTable/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/leaves" element={<HolidayList/>} />
        <Route path="/add-holiday" element={<AddHoliday open={true} onClose={() => {}} />} />
         
      </Routes>
    </Router>
  );
};

export default App;
