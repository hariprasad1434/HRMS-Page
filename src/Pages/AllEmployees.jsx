// src/Pages/AllEmployees.jsx
import React from "react";
import Sidebar from "../Components/Sidebar"; // adjust path if needed
import EmployeeTable from "../Components/Employees/EmployeeTable";
import { Box } from "@mui/material";
import Header from "../Components/Dash/Header";
import AddEmployees from "../Components/Employees/AddEmployee";
import { Route, Routes } from "react-router-dom";

const AllEmployees = () => {
  return (
    <Box display="flex">
      <Box flex={1}>
        <Header />
        <EmployeeTable />
        
      </Box>
    </Box>
  );
};

export default AllEmployees;
