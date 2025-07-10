import React, { useState } from "react";
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
  Chip,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  FormControl,
  Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "./Header"

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
  {
    name: "Leasie Watson",
    designation: "Team Lead - Design",
    type: "Office",
    time: "09:27 AM",
    status: "Late",
    avatar: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Leasie Watson",
    designation: "Team Lead - Design",
    type: "Office",
    time: "09:27 AM",
    status: "On Time",
    avatar: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Ronald Richards",
    designation: "Phython Developer",
    type: "Remote",
    time: "09:29 AM",
    status: "Late",
    avatar: "https://i.pravatar.cc/300?img=6",
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
    name: "Ronald Richards",
    designation: "Phython Developer",
    type: "Remote",
    time: "09:29 AM",
    status: "Late",
    avatar: "https://i.pravatar.cc/300?img=6",
  },
];

const AttendanceTable = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredData = attendanceData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div>
      <Header />
      <Card
        sx={{
          borderRadius: 3,
          p: 2,
          width: "1105px",
          height: "auto",
          ml: 45,
          mt: "-1530px",
          border: "1px  solid rgba(162, 161, 168, 0.2)",
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
            component="form"
            onSubmit={handleSearch}
          >
            <Box
              display="flex"
              alignItems="center"
              borderRadius={2}
              border="1px solid #ccc"
              px={2}
              py={1}
              width="100%"
              maxWidth={400}
            >
              <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
              <InputBase
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {['Employee Name', 'Designation', 'Type', 'Check In Time', 'Status'].map((head) => (
                    <TableCell
                      key={head}
                      sx={{
                        fontFamily: "Lexend",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "rgba(162, 161, 168, 1)",
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((emp, idx) => (
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
                          color:
                            emp.status === "On Time" ? "#1e824c" : "#d32f2f",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Footer */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={5}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2">Showing</Typography>
              <FormControl size="small">
                <Select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setPage(1);
                  }}
                  sx={{ borderRadius: 2, minWidth: 80 }}
                >
                  {[10, 20].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Typography variant="body2" color="text.secondary">
              Showing {paginatedData.length} of {filteredData.length} records
            </Typography>

            <Box display="flex" alignItems="center">
              <IconButton onClick={() => page > 1 && setPage(page - 1)}>
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                <Button
                  key={pg}
                  size="small"
                  variant={pg === page ? "contained" : "outlined"}
                  onClick={() => setPage(pg)}
                  sx={{
                minWidth: 32,
                borderRadius: 1,
                mx: 0.5,
                backgroundColor: pg === page ? "#8e63f3" : "transparent",
                color: pg === page ? "#fff" : "inherit",
                borderColor: "#dcdcdc",
                "&:hover": {
                  backgroundColor: pg === page ? "#7a56f0" : "#f5f5f5",
                },
              }}
                >
                  {pg}
                </Button>
              ))}
              <IconButton onClick={() => page < totalPages && setPage(page + 1)}>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceTable;