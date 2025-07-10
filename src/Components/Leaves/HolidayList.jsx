import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Divider,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const holidayData = [
  {
    date: "January 01, 2023",
    day: "Tuesday",
    name: "New Year",
    upcoming: false,
  },
  {
    date: "January 07, 2023",
    day: "Saturday",
    name: "International Programmers’ Day",
    upcoming: false,
  },
  {
    date: "February 04, 2023",
    day: "Saturday",
    name: "World Cancer Day",
    upcoming: false,
  },
  {
    date: "April 01, 2023",
    day: "Saturday",
    name: "April Fool Day",
    upcoming: false,
  },
  {
    date: "May 07, 2023",
    day: "Monday",
    name: "International Programmers’ Day",
    upcoming: false,
  },
  {
    date: "May 22, 2023",
    day: "Tuesday",
    name: "International Day for Biological Diversity",
    upcoming: false,
  },
  {
    date: "June 05, 2023",
    day: "Monday",
    name: "International Day for Biological Diversity",
    upcoming: false,
  },
  {
    date: "August 07, 2023",
    day: "Monday",
    name: "International Friendship Day",
    upcoming: true,
  },
  {
    date: "September 15, 2023",
    day: "Friday",
    name: "International Day of Democracy",
    upcoming: true,
  },
  {
    date: "November 14, 2023",
    day: "Tuesday",
    name: "World Diabetes Day",
    upcoming: true,
  },
  {
    date: "December 25, 2023",
    day: "Monday",
    name: "Merry Chrismas",
    upcoming: true,
  },
];

const HolidayList = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Paper
        elevation={1}
        sx={{
          p: 3,
          borderRadius: 3,
          width: "1080px",
          height: "800px",
          borderWidth: 1,
          opacity: 1,
          position: "relative",
          ml: 45,
          mt: "-1530px",
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
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { borderRadius: 12, width: 220 },
            }}
          />

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "#7b61ff",
              borderRadius: 2,
              textTransform: "none",
            }}
            onClick={() => navigate("/add-holiday")}
          >
            Add New Holiday
          </Button>
        </Box>

        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  fontFamily: "Lexend",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  color: "rgba(162, 161, 168, 1)",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  fontFamily: "Lexend",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  color: "rgba(162, 161, 168, 1)",
                }}
              >
                Day
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  fontFamily: "Lexend",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  color: "rgba(162, 161, 168, 1)",
                }}
              >
                Holiday Name
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {holidayData.map((holiday, idx) => (
              <TableRow key={idx} hover>
                <TableCell
                  sx={{
                    position: "relative",
                    pl: holiday.upcoming ? 2 : 1,
                    fontFamily: "Lexend",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  {holiday.upcoming && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 12,
                        width: 4,
                        height: 32,
                        backgroundColor: "#7b61ff",
                        borderRadius: 1,
                        fontFamily: "Lexend",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: 0,
                      }}
                    />
                  )}
                  {holiday.date}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  {holiday.day}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lexend",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  {holiday.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Divider sx={{ mt: 4, mb: 2 }} />

        <Box display="flex" gap={4} alignItems="center" mt={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#7b61ff",
              }}
            />
            <Typography variant="body2">Upcoming</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#b0b0b0",
              }}
            />
            <Typography variant="body2">Past Holidays</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default HolidayList;
