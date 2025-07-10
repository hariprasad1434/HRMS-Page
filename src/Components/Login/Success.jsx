// src/components/PasswordSuccess.jsx
import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useNavigate } from "react-router-dom";
import BG from "../../Assests/BG.png";
import WelcomebackFabiana from "../../Assests/WelcomebackFabiana.jpg";

const Success = () => {
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{ p: 6, borderRadius: 3, textAlign: "center", width: "300px",height:"300px" }}
      >
        <img src={WelcomebackFabiana} alt="icon"/>
        <Typography sx={{
          fontSize: "30px",
          fontWeight: 600,
          
          mt:"20px"
        }}>
          Password Update <br/> Successfully
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Your password has been updated successfully
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgba(113, 82, 243, 1)", textTransform: "none",width:"100%",height:"46px",borderRadius:"10px" }}
          onClick={() => navigate("/")}
        >
          Back to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Success;
