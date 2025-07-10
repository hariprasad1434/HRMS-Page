import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Divider,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import calendar from "../../Assests/calendar.svg";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

const scheduleData = {
  "2023-07-06": [
    { time: "09:30", role: "UI/UX Designer", title: "Practical Task Review" },
    { time: "12:00", role: "Magento Developer", title: "Resume Review" },
    { time: "01:30", role: "Sales Manager", title: "Final HR Round" },
  ],
  "2023-07-07": [
    {
      time: "09:30",
      role: "Front end Developer",
      title: "Practical Task Review",
    },
    { time: "11:00", role: "React JS", title: "TL Meeting" },
  ],
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs("2023-07-06"));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const startDay = currentMonth.startOf("month").startOf("week");
  const endDay = currentMonth.endOf("month").endOf("week");
  const dateFormat = "D";

  const generateDays = () => {
    let day = startDay.clone();
    const days = [];
    while (day.isBefore(endDay, "day")) {
      days.push(day);
      day = day.add(1, "day");
    }
    return days;
  };

  const calendarDays = generateDays();
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const formatDate = (day) => day.format("YYYY-MM-DD");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card
        sx={{
          width: "414px",
          height: "895px",
          borderRadius: 3,
          p: 2,
          ml: 131,
          mt: -116,
          boxShadow: "0px 0px 0px 0px white",
          border: "1px  solid rgba(162, 161, 168, 0.2)",
        }}
      >
        <CardContent>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold">
              My Schedule
            </Typography>
            <IconButton onClick={() => setShowDatePicker((prev) => !prev)}>
              <img
                src={calendar}
                alt="calendar"
                style={{ width: "25px", height: "25px" }}
              />
            </IconButton>
          </Box>

          {showDatePicker && (
            <Box mt={2} mb={2}>
              <DatePicker
                value={selectedDate}
                onChange={(newDate) => {
                  setSelectedDate(newDate);
                  setCurrentMonth(newDate);
                  setShowDatePicker(false);
                }}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Box>
          )}

          {/* Month Navigation */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <IconButton
              onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <Typography fontWeight={500}>
              {currentMonth.format("MMMM, YYYY")}
            </Typography>
            <IconButton
              onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Days of Week Labels */}
          <Box display="flex" justifyContent="space-between" mt={2}>
            {dayNames.map((day) => (
              <Typography key={day} fontSize={12} width={32} textAlign="center">
                {day}
              </Typography>
            ))}
          </Box>

          {/* Calendar Grid */}
          <Box display="flex" flexWrap="wrap" mt={1}>
            {calendarDays.map((day) => {
              const isSelected = day.isSame(selectedDate, "day");
              const hasEvent = scheduleData[formatDate(day)];
              return (
                <Box
                  key={day.toString()}
                  width={32}
                  height={32}
                  m={0.5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  bgcolor={
                    isSelected ? "#a58af2" : hasEvent ? "#eee" : "transparent"
                  }
                  color={isSelected ? "white" : "black"}
                  sx={{ cursor: "pointer", fontSize: 13 }}
                  onClick={() => setSelectedDate(day)}
                >
                  {day.format(dateFormat)}
                </Box>
              );
            })}
          </Box>

          {/* Schedule Events */}
          <Box mt={2}>
            {scheduleData[formatDate(selectedDate)]?.map((item, idx) => (
              <Box key={idx} mb={2} position="relative">
                <Typography fontSize={12} color="gray">
                  {selectedDate.format("dddd, DD MMMM YYYY")}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <Box>
                    <Typography fontWeight={600} fontSize={14}>
                      {item.time}
                    </Typography>
                  </Box>
                  <Box ml={2} borderLeft="2px solid #a58af2" pl={1}>
                    <Typography fontSize={12} color="gray">
                      {item.role}
                    </Typography>
                    <Typography fontWeight={600} fontSize={14}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
                <Box position="absolute" right={0} top={0}>
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Box>
                {idx !== scheduleData[formatDate(selectedDate)].length - 1 && (
                  <Divider sx={{ mt: 1 }} />
                )}
              </Box>
            )) || (
              <Typography fontSize={13} color="text.secondary" mt={1}>
                No events scheduled.
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
};

export default Calendar;
