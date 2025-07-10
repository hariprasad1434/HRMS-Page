import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import {
  Search,
  
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import Header from "./Header";
import upload from  "../../Assests/upload.png"

const payrollData = [
  {
    id: 1,
    name: "Leasie Watson",
    ctc: "$45000",
    salary: "$3500",
    deduction: "-",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Darlene Robertson",
    ctc: "$78000",
    salary: "$6400",
    deduction: "$100",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Jacob Jones",
    ctc: "$60000",
    salary: "$5000",
    deduction: "$250",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Kathryn Murphy",
    ctc: "$34000",
    salary: "$2800",
    deduction: "-",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    ctc: "$40000",
    salary: "$3400",
    deduction: "-",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Ronald Richards",
    ctc: "$45000",
    salary: "$3500",
    deduction: "-",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Guy Hawkins",
    ctc: "$55000",
    salary: "$4000",
    deduction: "$50",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Albert Flores",
    ctc: "$60000",
    salary: "$5000",
    deduction: "$150",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Savannah Nguyen",
    ctc: "$25000",
    salary: "$2200",
    deduction: "-",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Marvin McKinney",
    ctc: "$30000",
    salary: "$2700",
    deduction: "-",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Jerome Bell",
    ctc: "$78000",
    salary: "$6400",
    deduction: "-",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Jenny Wilson",
    ctc: "$45000",
    salary: "$3500",
    deduction: "$100",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];
const PayrollPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = payrollData.filter((record) =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (direction) => {
    const maxPage = Math.ceil(filteredData.length / rowsPerPage) - 1;
    if (direction === "next" && page < maxPage) setPage(page + 1);
    if (direction === "prev" && page > 0) setPage(page - 1);
  };

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const getStatusChipStyle = (status) => {
    if (status === "Completed") {
      return {
        backgroundColor: "rgba(63, 194, 138, 0.1)",
        color: "#3fc28a",
      };
    } else {
      return {
        backgroundColor: "rgba(239, 190, 18, 0.1)",
        color: "#efbe12",
      };
    }
  };

  return (
    <Box >
      <Header />
      <Box
        sx={{
          p: 3,
          ml: 45,
          mt: "-1530px",
          width: "1080px",
          
          borderRadius: 3,
          boxShadow: "0px 0px 0px 0px white",
          border: "1px solid rgba(162, 161, 168, 0.2)",
        }}
      >
        
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 300,
              borderRadius: 3,
              boxShadow: "0px 0px 0px 0px white",
              border: "0px solid rgba(162, 161, 168, 0.2)",
            }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#8e63f3", borderRadius: 2, textTransform: "none" }}
          >
            <img src={upload} alt="uploadicon" style={{ width: 20, height: 20, marginRight: 8 }} />
            Export
          </Button>
        </Box>

        
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0px 0px 0px 0px white",
            border: "0px solid rgba(162, 161, 168, 0.2)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "rgba(162, 161, 168, 1)" }}>
                  Employee Name
                </TableCell>
                <TableCell sx={{ color: "rgba(162, 161, 168, 1)" }}>
                  CTC
                </TableCell>
                <TableCell sx={{ color: "rgba(162, 161, 168, 1)" }}>
                  Salary Per Month
                </TableCell>
                <TableCell sx={{ color: "rgba(162, 161, 168, 1)" }}>
                  Deduction
                </TableCell>
                <TableCell sx={{ color: "rgba(162, 161, 168, 1)" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          src={record.avatar}
                          alt={record.name}
                          sx={{ width: 32, height: 32, mr: 2 }}
                        />
                        {record.name}
                      </Box>
                    </TableCell>

                    <TableCell>{record.ctc}</TableCell>
                    <TableCell>{record.salary}</TableCell>
                    <TableCell>{record.deduction}</TableCell>
                    <TableCell>
                      <Chip
                        label={record.status}
                        size="small"
                        sx={getStatusChipStyle(record.status)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Showing</Typography>
            <FormControl size="small">
              <Select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
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
            Showing {page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredData.length)} out of{" "}
            {filteredData.length} records
          </Typography>

          <Box display="flex" alignItems="center">
            <IconButton onClick={() => handleChangePage("prev")}>
              <ArrowBackIos fontSize="small" />
            </IconButton>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                size="small"
                variant={i === page ? "contained" : "outlined"}
                onClick={() => setPage(i)}
                sx={{
                  mx: 0.5,
                  minWidth: 32,
                  borderRadius: 1,
                  backgroundColor: i === page ? "#8e63f3" : "transparent",
                  color: i === page ? "#fff" : "inherit",
                  borderColor: "#ccc",
                }}
              >
                {i + 1}
              </Button>
            ))}
            <IconButton onClick={() => handleChangePage("next")}>
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PayrollPage;
