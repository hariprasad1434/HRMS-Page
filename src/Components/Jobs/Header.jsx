import React, { useState } from "react";
import Sidebar from "../Sidebar";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import Search from "../../Assests/Search.svg";
import { useNavigate } from "react-router-dom";
import notification from "../../Assests/Notification.png";
import profileimage from "../../Assests/profileimage.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleProfileClick = () => {
    handleMenuClose();
    alert("My Profile Clicked");
    // Navigation logic here
  };

 const handleLogoutClick = () => {
    handleMenuClose();
    // Clear localStorage/sessionStorage here if needed
    navigate("/"); // ✅ Redirect to login page
  };

  return (
    <Box style={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ pt: 2, pl: 3 }}>
        {/* Top Greeting */}
        <Typography sx={{ fontWeight: 600, fontSize: "20px", ml: 1 }}>
          Jobs
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lexend",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "22px",
            letterSpacing: 0,
            color: "rgba(162, 161, 168, 1)",
            ml: 1,
          }}
        >
          Show all Jobs
        </Typography>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          style={{
            display: "flex",
            width: "261px",
            height: "20px",

            gap: "10px",
            borderRadius: "10px",
            paddingTop: "13px",
            paddingRight: "16px",
            paddingBottom: "13px",
            paddingLeft: "35px",
            backgroundColor: "rgb(255, 255, 255)",
            border: "1px  solid rgba(162, 161, 168, 0.2)",
            marginLeft: "560px",
            marginTop: "-50px",
            color: "rgb(0, 0, 0)",
            fontFamily: "Lexend",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        />
        <img
          src={Search}
          alt="searchicon"
          style={{
            position: "relative",
            left: "570px",
            top: "-58px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />

        {/* Notification Icon */}
        <img
          src={notification}
          alt="notificationicon"
          style={{
            position: "relative",
            left: "870px",
            top: "-45px",
            width: "45px",
            height: "45px",
          }}
        />

        {/* Profile Card with Dropdown */}
        <Card
          sx={{
            width: "184px",
            height: "50px",
            border: "1px solid rgba(162, 161, 168, 0.2)",
            borderRadius: "10px",
            boxShadow:"0px 0px 0px 0px white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            
            ml: 119,
            mt: "-97px",
          }}
        >
          <Box display="flex" alignItems="center">
            <img
              src={profileimage}
              alt="profile"
              style={{ height: "40px",
                width: "40px",
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,}}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Lexend",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                }}
              >
                Robert Allen
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lexend",
                  fontWeight: 300,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: 0,
                  color: "gray",
                }}
              >
                HR Manager
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={handleMenuOpen}>
            <ExpandMoreIcon />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              elevation: 3,
              sx: {
                mt: 1,
                borderRadius: 2,
                width: 160,
              },
            }}
          >
            <MenuItem onClick={handleProfileClick}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              My Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogoutClick} sx={{ color: "#f44336" }}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Card>
      </Box>
    </Box>
  );
}

export default Header;
