import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import DB1 from "../../Assests/DB1.png";
import Bdb1 from "../../Assests/Bdb1.png";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next field if value entered
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ marginLeft: "850px" }}
    >
      <img
        src={Bdb1}
        alt="DashboardBackground"
        style={{
          position: "absolute",
          left: "70px",
          width: "820px",
          height: "95%",
          filter: "blur(70px)",
        }}
      />
      <img
        src={DB1}
        alt="DashboardImage"
        style={{
          position: "absolute",
          width: "585px",
          height: "590px",
          marginLeft: "-1200px",
          filter: "blur(15px)",
        }}
      />

      <Box sx={{ width: 400, backgroundColor: "white", p: 4 }}>
        <IconButton onClick={() => navigate("/forgot-password")} sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h6" fontWeight="bold" mb={1}>
          Enter OTP
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          We have shared a code with your registered email address
          robertallen@example.com
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={4}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: "18px" },
              }}
              sx={{
                mt: 2,
                mb: 2,
                width: 60,
                height: 60,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderRadius: "10px" },
                  "&:hover fieldset": {
                    borderColor: "rgba(113, 82, 243, 1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(113, 82, 243, 1)",
                  },
                },
              }}
            />
          ))}
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#8e63f3",
            textTransform: "none",
            borderRadius: 2,
          }}
          onClick={() => navigate("/success")}
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default OTP;
