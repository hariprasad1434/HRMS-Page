import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Sample Data
const attendanceData = [
  {
    name: "Leasie Watson",
    designation: "Team Lead - Design",
    type: "Office",
    time: "09:27 AM",
    status: "On Time",
    avatar: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Darlene Robertson",
    designation: "Web Designer",
    type: "Office",
    time: "10:15 AM",
    status: "Late",
    avatar: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Jacob Jones",
    designation: "Medical Assistant",
    type: "Remote",
    time: "10:24 AM",
    status: "Late",
    avatar: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Kathryn Murphy",
    designation: "Marketing Coordinator",
    type: "Office",
    time: "09:10 AM",
    status: "On Time",
    avatar: "https://i.pravatar.cc/300?img=4",
  },
  {
    name: "Leslie Alexander",
    designation: "Data Analyst",
    type: "Office",
    time: "09:15 AM",
    status: "On Time",
    avatar: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Ronald Richards",
    designation: "Phython Developer",
    type: "Remote",
    time: "09:29 AM",
    status: "On Time",
    avatar: "https://i.pravatar.cc/300?img=6",
  },
  {
    name: "Jenny Wilson",
    designation: "React JS Developer",
    type: "Remote",
    time: "11:30 AM",
    status: "Late",
    avatar: "https://i.pravatar.cc/300?img=7",
  },
];

const AttendanceTable = () => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        borderRadius: 3,
        p: 2,
        width: "1105px",
        height: "522px",
        ml: 45,
        mt: 3,
        boxShadow: "0px 0px 0px 0px white",
        border: "1px  solid rgba(162, 161, 168, 0.2)",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            Attendance Overview
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate("/all-attendance")}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              border: "1px  solid rgba(162, 161, 168, 0.2)",
              color: "rgba(22, 21, 28, 1)",
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "22px",
              letterSpacing: 0,
              textAlign: "right",
            }}
          >
            View All
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Check In Time</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((emp, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar src={emp.avatar} alt={emp.name} />
                      <Typography fontSize={14}>{emp.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={14}>{emp.designation}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={14}>{emp.type}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={14}>{emp.time}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={emp.status}
                      size="small"
                      sx={{
                        backgroundColor:
                          emp.status === "On Time" ? "#d6f5e9" : "#ffe3e3",
                        color: emp.status === "On Time" ? "#1e824c" : "#d32f2f",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AttendanceTable;
