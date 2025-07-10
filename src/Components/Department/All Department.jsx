import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// Sample employee data
const initialData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  empId: `EMP${1000 + i}`,
  dept:
    i % 4 === 0
      ? "Design"
      : i % 4 === 1
      ? "Sales"
      : i % 4 === 2
      ? "Project Manager"
      : "Marketing",
  role:
    i % 4 === 0
      ? "UI/UX Designer"
      : i % 4 === 1
      ? "Sr. Sales Manager"
      : i % 4 === 2
      ? "Project Manager"
      : "Marketing Manager",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const groupByDepartment = () => {
  const grouped = {};
  initialData.forEach((emp) => {
    if (!grouped[emp.dept]) {
      grouped[emp.dept] = [];
    }
    grouped[emp.dept].push(emp);
  });

  return Object.entries(grouped).map(([dept, employees]) => ({
    title: `${dept} Department`,
    members: employees.length,
    employees: employees.slice(0, 5),
  }));
};

const EmployeeCard = ({ employee }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between" py={1}>
    <Box display="flex" alignItems="center">
      <Avatar src={employee.avatar} sx={{ width: 34, height: 34, mr: 1.5 }} />
      <Box>
        <Typography fontSize={14} fontWeight={500} sx={{ fontFamily: "Lexend" }}>
          {employee.name}
        </Typography>
        <Typography fontSize={12} color="text.secondary" sx={{ fontFamily: "Lexend",color: "gray" }}>
          {employee.role}
        </Typography>
      </Box>
    </Box>
    <IconButton size="small">
      <ArrowForwardIosIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.4)" }} />
    </IconButton>
  </Box>
);

const DepartmentCard = ({ department }) => {
  const navigate = useNavigate();
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        p: 2,
        ml: 3,
        boxShadow: "0px 0px 0px 0px white",
        border: "1px solid rgba(162, 161, 168, 0.2)",
        width: "450px",
        height: "397px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Box>
          <Typography fontWeight={600} fontSize={15} sx={{ fontFamily: "Lexend" }}>
            {department.title}
          </Typography>
          <Typography fontSize={12} color="text.secondary" sx={{ fontFamily: "Lexend",color: "gray" }}>
            {department.members} Members
          </Typography>
        </Box>
        <Typography
          fontSize={12}
          fontWeight={500}
          sx={{ cursor: "pointer", color: "#815DF2",fontFamily: "Lexend" }}
          onClick={() => navigate("/all-employees")}
        >
          View All
        </Typography>
      </Box>
      <hr style={{ border: "1px solid rgba(162, 161, 168, 0.2)",width:"100vw",padding:0,marginLeft:"-15px" }} />
      <CardContent sx={{ p: 0, mt: 1,fontFamily: "Lexend" }}>
        {department.employees.map((emp, idx) => (
          <EmployeeCard key={idx} employee={emp} />
        ))}
      </CardContent>
    </Card>
  );
};

export default function DepartmentGrid() {
  const departments = groupByDepartment();

  return (
    <Box>
      <Header />
      <Box
        p={3}
        sx={{
          ml: 45,
          mt: "-1530px",
          border: "1px solid rgba(162, 161, 168, 0.2)",
          borderRadius: 2,
          backgroundColor: "#fff",
          width: "1080px",
          height: "934px",
        }}
      >
        {/* Search */}
        <Box
          display="flex"
          alignItems="center"
          borderRadius={2}
          border="1px solid #ccc"
          px={2}
          py={1}
          mb={3}
          width="100%"
          maxWidth={400}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
          <InputBase placeholder="Search" fullWidth />
        </Box>

        {/* Grid */}
        <Grid container spacing={2}>
          {departments.map((dept, index) => (
            <Grid item xs={12} md={6} key={index}>
              <DepartmentCard department={dept} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
