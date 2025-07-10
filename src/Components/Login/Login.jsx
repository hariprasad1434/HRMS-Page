import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DB1 from "../../Assests/DB1.png";
import Bdb1 from "../../Assests/Bdb1.png";
import Hii from "../../Assests/Hii.png";
import HrIcon from "../../Assests/Hr Icon.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@example.com",
          password: "yourpassword",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        setErrors({
          email: "Invalid email or password",
          password: "Invalid email or password",
        });
      } else {
        navigate("/Dashboard");
      }
    } catch (error) {
      console.error("Login error", error);
      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Blurred background images */}
      <img
        src={Bdb1}
        alt="Background"
        style={{
          position: "absolute",
          left: "70px",
          width: "820px",
          height: "95%",
          filter: "blur(20px)",
        }}
      />
      <img
        src={DB1}
        alt="Foreground"
        style={{
          position: "absolute",
          width: "585px",
          height: "590px",
          marginLeft: "-350px",
          filter: "blur(15px)",
        }}
      />

      <Box
        sx={{
          width: 400,
          backgroundColor: "white",
          p: 4,
          ml: "800px",
          borderRadius: 3,
        }}
      >
        {/* Logo & title */}
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <img src={HrIcon} alt="HR" style={{ width: 53, height: 53 }} />
          <Typography variant="h4" fontWeight={400}>
            HRMS
          </Typography>
        </Box>

        {/* Greeting */}
        <Typography
          sx={{
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 600,
            fontSize: "34px",
          }}
        >
          Welcome <img src={Hii} alt="Hello" style={{ width: "30px" }} />
        </Typography>
        <Typography
          sx={{
            color: "rgba(162, 161, 168, 1)",
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Please login here
        </Typography>

        {/* Email input */}
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "rgba(113, 82, 243, 1)" },
              "&:hover fieldset": { borderColor: "rgba(113, 82, 243, 1)" },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(113, 82, 243, 1)",
              },
            },
          }}
        />

        {/* Password input */}
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "rgba(113, 82, 243, 1)" },
              "&:hover fieldset": { borderColor: "rgba(113, 82, 243, 1)" },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(113, 82, 243, 1)",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Remember Me & Forgot Password */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
          mt={1}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                sx={{ color: "#8e63f3" }}
              />
            }
            label="Remember Me"
          />
          <Typography
            variant="body2"
            sx={{ color: "#8e63f3", cursor: "pointer", fontWeight: 500 }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </Typography>
        </Box>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#8e63f3",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: 2,
            py: 1.2,
            fontSize: "1rem",
            "&:hover": { backgroundColor: "#7a4df0" },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
