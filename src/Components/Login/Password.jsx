// src/components/ForgotPassword.jsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import DB1 from "../../Assests/DB1.png";
import Bdb1 from "../../Assests/Bdb1.png";

const Password = () => {
  const [email, setEmail] = useState("Hari@gmail.com");
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      
      sx={{
        marginLeft: "850px",
      }}
    >
      <img
              src={Bdb1}
              alt="DashboardBackgound"
              style={{
                position: "absolute",
                left: "70px",
                width: "820px",
                height: "95%",
                filter:"blur(5px)",
                
              }}
            />
            <img
              src={DB1}
              alt="Dashboardimage"
              style={{
                position: "absolute",
                width: "585px",
                height: "590px",
                marginLeft: "-1200px",
                filter:"blur(15px)"
              }}
            />
      <Box
        sx={{
          width: 400,
          backgroundColor: "white",
          p: 4,
        }}
      >
        <IconButton onClick={() => navigate("/")} sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Forgot Password
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Enter your registered email address. We'll send you a code to reset
          your password.
        </Typography>
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mt:3,
            mb:2,
            
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(113, 82, 243, 1)", // Default
      },
      "&:hover fieldset": {
        borderColor: "rgba(113, 82, 243, 1)", // On hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(113, 82, 243, 1)", // On focus
      },
    },
  }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#8e63f3",
            textTransform: "none",
            borderRadius: 2,
          }}
          onClick={() => navigate("/verify-otp")}
        >
          Send OTP
        </Button>
      </Box>
    </Box>
  );
};

export default Password;
