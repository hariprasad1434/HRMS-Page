import React, { useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "./Header"; // Update the path as needed

const statusColors = {
  Selected: "success",
  "In Process": "warning",
  Rejected: "error",
};

const candidatesData = [
  {
    name: "Leasie Watson",
    appliedFor: "UI/UX Designer",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    phone: "(629) 555-0129",
    status: "Selected",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Floyd Miles",
    appliedFor: "Sales Manager",
    appliedDate: "July 14, 2023",
    email: "floyed.m@demo.com",
    phone: "(217) 555-0113",
    status: "In Process",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Theresa Webb",
    appliedFor: "Sr. UX Designer",
    appliedDate: "July 14, 2023",
    email: "theresa.w@demo.com",
    phone: "(219) 555-0114",
    status: "In Process",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Darlene Robertson",
    appliedFor: "Sr. Python Developer",
    appliedDate: "July 14, 2023",
    email: "darlene.r@demo.com",
    phone: "(505) 555-0125",
    status: "In Process",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Esther Howard",
    appliedFor: "BDE",
    appliedDate: "July 14, 2023",
    email: "esther.h@demo.com",
    phone: "(405) 555-0128",
    status: "Rejected",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Darrell Steward",
    appliedFor: "HR Executive",
    appliedDate: "July 14, 2023",
    email: "darrell.s@demo.com",
    phone: "(603) 555-0123",
    status: "Rejected",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Ronald Richards",
    appliedFor: "Project Manager",
    appliedDate: "July 14, 2023",
    email: "ronald.r@demo.com",
    phone: "(480) 555-0103",
    status: "Selected",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Jacob Jones",
    appliedFor: "Business Analyst",
    appliedDate: "July 14, 2023",
    email: "jacob.j@demo.com",
    phone: "(208) 555-0112",
    status: "Selected",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Cameron Williamson",
    appliedFor: "Sr. UI/UX Lead",
    appliedDate: "July 14, 2023",
    email: "cameron.w@demo.com",
    phone: "(671) 555-0110",
    status: "In Process",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Bessie Cooper",
    appliedFor: "BDM",
    appliedDate: "July 14, 2023",
    email: "bessie.c@demo.com",
    phone: "(225) 555-0118",
    status: "Rejected",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Kathryn Murphy",
    appliedFor: "IOS Developer",
    appliedDate: "July 14, 2023",
    email: "kathryn.m@demo.com",
    phone: "(239) 555-0108",
    status: "Rejected",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Marvin McKinney",
    appliedFor: "Delivery Head",
    appliedDate: "July 14, 2023",
    email: "marvin.m@demo.com",
    phone: "(308) 555-0121",
    status: "Selected",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

const CandidateTable = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredCandidates.length / rowsPerPage) - 1;
    setPage((prev) => Math.min(prev + 1, maxPage));
  };

  const filteredCandidates = candidatesData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);
  const start = page * rowsPerPage + 1;
  const end = Math.min((page + 1) * rowsPerPage, filteredCandidates.length);

  return (
    <Box>
      <Header />
      <Box
        p={3}
        sx={{
          width: "1080px",
          ml: 45,
          mt: "-1530px",
          borderRadius: 3,
          border: "1px solid rgba(162, 161, 168, 0.2)",
          backgroundColor: "#fff",
        }}
      >
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          sx={{ mb: 2, width: 330 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={handleSearchChange}
        />

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    color: "rgba(162, 161, 168, 1)",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Candidate Name
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    color: "rgba(162, 161, 168, 1)",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Applied For
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    color: "rgba(162, 161, 168, 1)",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Applied Date
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    color: "rgba(162, 161, 168, 1)",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Email Address
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    color: "rgba(162, 161, 168, 1)",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Mobile Number
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    color: "rgba(162, 161, 168, 1)",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredCandidates
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((candidate, index) => (
                  <TableRow key={index} hover>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar src={candidate.avatar} />
                        <Typography
                          sx={{
                            fontFamily: "Lexend",
                            fontWeight: 300,
                            fontSize: "16px",
                            lineHeight: "24px",
                            letterSpacing: 0,
                          }}
                        >
                          {candidate.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Lexend",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: 0,
                      }}
                    >
                      {candidate.appliedFor}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Lexend",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: 0,
                      }}
                    >
                      {candidate.appliedDate}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Lexend",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: 0,
                      }}
                    >
                      {candidate.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Lexend",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: 0,
                      }}
                    >
                      {candidate.phone}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={candidate.status}
                        size="small"
                        sx={{
                          fontWeight: 500,
                          fontSize: "13px",
                          borderRadius: "6px",
                          backgroundColor:
                            candidate.status === "Selected"
                              ? "rgba(0, 171, 85, 0.1)"
                              : candidate.status === "In Process"
                              ? "rgba(255, 171, 0, 0.1)"
                              : "rgba(255, 86, 48, 0.1)",
                          color:
                            candidate.status === "Selected"
                              ? "#00AA55"
                              : candidate.status === "In Process"
                              ? "#FFA800"
                              : "#FF5630",
                          border: "none",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Custom Pagination Footer */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          px={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              color="text.secondary"
              sx={{
                fontFamily: "Lexend",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "22px",
                letterSpacing: 0,
                color: "rgba(162, 161, 168, 1)",
              }}
            >
              Showing
            </Typography>
            <Select
              size="small"
              value={rowsPerPage}
              onChange={(e) => {
                setPage(0);
                setRowsPerPage(parseInt(e.target.value, 10));
              }}
              sx={{
                borderRadius: "10px",
                width: 65,
                fontSize: 14,
              }}
            >
              {[5, 10, 20, 50].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Typography
            color="text.secondary"
            sx={{
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "22px",
              letterSpacing: 0,
              color: "rgba(162, 161, 168, 1)",
            }}
          >
            Showing {start} to {end} out of {filteredCandidates.length} records
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <IconButton onClick={handlePrevPage} disabled={page === 0}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {Array.from({ length: totalPages }).map((_, i) => (
              <Box
                key={i}
                onClick={() => setPage(i)}
                sx={{
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  border: i === page ? "1px solid #815DF2" : "none",
                  color: i === page ? "#815DF2" : "inherit",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </Box>
            ))}

            <IconButton
              onClick={handleNextPage}
              disabled={page === totalPages - 1}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CandidateTable;
