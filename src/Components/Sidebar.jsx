import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { Dashboard, LightMode } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import user from "../Assests/user.svg";
import community from "../Assests/community.svg";
import calendarCheck from "../Assests/calendar-check.svg";
import coindollar from "../Assests/coin-dollar.png";
import briefcase from "../Assests/briefcase 04.png";
import user1 from "../Assests/users 01.png";
import notepad from "../Assests/notepad.png";
import notes from "../Assests/notes 01.png";
import setting from "../Assests/setting.svg";
import HrIcon from "../Assests/Hr Icon.png";
import HRMS from "../Assests/HRMS.svg";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, route: "/Dashboard" },
  {
    text: "All Employees",
    icon: <img src={user} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/All-Employees",
  },
  {
    text: "All Departments",
    icon: <img src={community} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/All-Department",
  },
  {
    text: "Attendance",
    icon: <img src={calendarCheck} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/attendance",
  },
  {
    text: "Payroll",
    icon: <img src={coindollar} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/payroll",
  },
  {
    text: "Jobs",
    icon: <img src={briefcase} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/jobs",
  },
  {
    text: "Candidates",
    icon: <img src={user1} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/candidates",
  },
  {
    text: "Leaves",
    icon: <img src={notepad} alt="icon" style={{ width: 24, height: 24 }} />,
  },
  {
    text: "Holidays",
    icon: <img src={notes} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/leaves",
  },
  {
    text: "Settings",
    icon: <img src={setting} alt="icon" style={{ width: 24, height: 24 }} />,
    route: "/settings",
  },
];

const Sidebar = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <Box
      sx={{
        width: "280px",
        minHeight: "1536px",
        backgroundColor: theme === "light" ? "rgba(162, 161, 168, 0.05)" : "#1e1e1e",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        py: 3,
        px: 2,
        ml: "20px",
        mt: "15px",
        mb: "15px",
        borderRadius: "20px",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1} mb={4}>
        <Box
          sx={{
            bgcolor: "#8e63f3",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={HrIcon} alt="icon" style={{ width: "36px", height: "36px" }} />
        </Box>
        <Typography variant="h4" fontWeight={500} pl={1}>
          <img src={HRMS} alt="HRMS" />
        </Typography>
      </Box>

      {/* Menu */}
      <Box flex={1}>
        <List>
          {menuItems.map((item) => {
            const isSelected =
              currentRoute === item.route ||
              (item.text === "All Employees" && currentRoute === "/add-employee");

            return (
              <ListItemButton
                key={item.text}
                selected={isSelected}
                onClick={() => {
                  if (item.route) navigate(item.route);
                }}
                sx={{
                  borderRadius: "10px",
                  mb: 0.5,
                  px: 2,
                  py: 1,
                  ...(isSelected && {
                    backgroundColor: "rgba(142, 99, 243, 0.1)",
                    color: "#8e63f3",
                    fontWeight: "bold",
                  }),
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isSelected ? "#8e63f3" : theme === "dark" ? "#aaa" : "#666",
                    minWidth: 32,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontWeight: 300,
                    fontSize: "15px",
                    pl: 2,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      {/* Theme Toggle */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: theme === "light" ? "#f5f5f5" : "#2c2c2c",
          ml: 3,
          width: 220,
          height: 50,
          borderRadius: "10px",
          p: 0,
        }}
      >
        <Button
          variant={theme === "light" ? "contained" : "text"}
          onClick={() => setTheme("light")}
          startIcon={<LightMode fontSize="small" />}
          sx={{
            flex: 1,
            borderRadius: "10px",
            textTransform: "none",
            width: 220,
            height: 55,
            backgroundColor: theme === "light" ? "#7c4dff" : "transparent",
            fontFamily: "Lexend",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            color: theme === "light" ? "#fff" : "#000",
            "&:hover": {
              backgroundColor: "#6b39f4",
            },
          }}
        >
          Light
        </Button>
        <Button
          variant={theme === "dark" ? "contained" : "text"}
          onClick={() => setTheme("dark")}
          startIcon={
            <img
              src="https://img.icons8.com/?size=100&id=Bm6NCBg9KwFn&format=png&color=000000"
              alt="halfmoon"
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "-20px",
              }}
            />
          }
          sx={{
            flex: 1,
            borderRadius: "10px",
            textTransform: "none",
            width: 220,
            height: 55,
            backgroundColor: theme === "dark" ? "#7c4dff" : "transparent",
            fontFamily: "Lexend",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            color: theme === "dark" ? "#fff" : "#000",
            "&:hover": {
              backgroundColor: "#6b39f4",
            },
          }}
        >
          Dark
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
