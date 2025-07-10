import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data
const chartData = {
  Today: [
    { day: "Mon", Present: 60, Late: 30, Absent: 10 },
    { day: "Tue", Present: 60, Late: 20, Absent: 20 },
    { day: "Wed", Present: 50, Late: 30, Absent: 20 },
    { day: "Thu", Present: 60, Late: 30, Absent: 10 },
    { day: "Fri", Present: 75, Late: 10, Absent: 15 },
    { day: "Sat", Present: 45, Late: 35, Absent: 20 },
    { day: "Sun", Present: 50, Late: 35, Absent: 15 },
  ],
  Week: [
    { day: "Week 1", Present: 420, Late: 80, Absent: 20 },
    { day: "Week 2", Present: 450, Late: 60, Absent: 40 },
    { day: "Week 3", Present: 400, Late: 70, Absent: 30 },
    { day: "Week 4", Present: 430, Late: 65, Absent: 35 },
  ],
  Month: [
    { day: "Jan", Present: 1600, Late: 200, Absent: 100 },
    { day: "Feb", Present: 1550, Late: 180, Absent: 120 },
    { day: "Mar", Present: 1620, Late: 150, Absent: 130 },
    { day: "Apr", Present: 1580, Late: 170, Absent: 90 },
    { day: "May", Present: 1640, Late: 160, Absent: 80 },
    { day: "Jun", Present: 1590, Late: 140, Absent: 110 },
    { day: "Jul", Present: 1610, Late: 190, Absent: 100 },
    { day: "Aug", Present: 1570, Late: 175, Absent: 105 },
    { day: "Sep", Present: 1630, Late: 185, Absent: 85 },
    { day: "Oct", Present: 1600, Late: 160, Absent: 90 },
    { day: "Nov", Present: 1585, Late: 150, Absent: 115 },
    { day: "Dec", Present: 1625, Late: 170, Absent: 105 },
  ],
};

// Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          background: "white",
          boxShadow: 2,
          borderRadius: 1,
          padding: "8px 12px",
        }}
      >
        {payload.map((entry, idx) => (
          <Typography key={idx} sx={{ color: entry.color, fontSize: 13 }}>
            {entry.name}: {entry.value}
          </Typography>
        ))}
      </Box>
    );
  }
  return null;
};

// Main Component
const Attendance = () => {
  const [view, setView] = useState("Today");
  const maxY = view === "Today" ? 100 : view === "Week" ? 600 : 2000;

  return (
    <Card
      sx={{
        borderRadius: 3,
        p: 1,

        height: "534px",
        width: "646px",
        ml: 45,
        mt: 5,
        boxShadow: "0px 0px 0px 0px white",
        border: "1px  solid rgba(162, 161, 168, 0.2)",
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            sx={{
              fontFamily: "Lexend",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: 0,
            }}
          >
            Attendance Overview
          </Typography>
          <Select
            value={view}
            onChange={(e) => setView(e.target.value)}
            size="small"
            variant="outlined"
            sx={{
              fontSize: "14px",
              borderRadius: "10px",
              height: 36,
              width: 100,
              "& .MuiOutlinedInput-input": {
                padding: "8px 12px",
              },
            }}
          >
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="Week">Week</MenuItem>
            <MenuItem value="Month">Month</MenuItem>
          </Select>
        </Box>

        {/* Chart */}
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={chartData[view]}
            barSize={15}
            barGap={5}
            barCategoryGap={5}
          >
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 13 }}
              domain={[0, maxY]}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
            />

            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="Present"
              stackId="a"
              fill="#7c4dff"
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="Late"
              stackId="a"
              fill="#fcae3b"
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="Absent"
              stackId="a"
              fill="#f44336"
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Attendance;
