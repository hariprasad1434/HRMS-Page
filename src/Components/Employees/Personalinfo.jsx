import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Avatar,
  Paper,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CameraAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const navButtons = [
  { label: "Personal Information", path: "/personal-info" },
  { label: "Professional Information", path: "/professional-info" },
  { label: "Documents", path: "/documents" },
  { label: "Account Access", path: "/account-access" },
];

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/personal-info");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    dob: null,
    maritalStatus: "",
    gender: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={0} sx={{ borderRadius: "16px", p: 4 }}>
        {/* 👇 Button Tabs Navigation */}
        <Box display="flex" gap={2} mb={3}>
          {navButtons.map((btn) => (
            <Button
              key={btn.path}
              variant={active === btn.path ? "contained" : "outlined"}
              onClick={() => {
                setActive(btn.path);
                navigate(btn.path);
              }}
              sx={{
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "8px",
                backgroundColor:
                  active === btn.path ? "#7c3aed" : "transparent",
                color: active === btn.path ? "#fff" : "#6b7280",
                borderColor: active === btn.path ? "#7c3aed" : "#d1d5db",
                "&:hover": {
                  backgroundColor: active === btn.path ? "#6a28d9" : "#f3f4f6",
                },
              }}
            >
              {btn.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ mb: 3 }}>
          <Avatar
            sx={{ width: 64, height: 64, bgcolor: "#f3f4f6", color: "#9ca3af" }}
            variant="rounded"
          >
            <CameraAlt />
          </Avatar>
        </Box>

        {/* 👇 Form Fields */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              fullWidth
              value={formData.firstName}
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={handleChange("lastName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              fullWidth
              value={formData.mobile}
              onChange={handleChange("mobile")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              fullWidth
              value={formData.email}
              onChange={handleChange("email")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Date of Birth"
              value={formData.dob}
              onChange={(newVal) => setFormData({ ...formData, dob: newVal })}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Marital Status</InputLabel>
              <Select
                value={formData.maritalStatus}
                onChange={handleChange("maritalStatus")}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={formData.gender}
                onChange={handleChange("gender")}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Nationality</InputLabel>
              <Select
                value={formData.nationality}
                onChange={handleChange("nationality")}
              >
                <MenuItem value="indian">Indian</MenuItem>
                <MenuItem value="american">American</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              value={formData.address}
              onChange={handleChange("address")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <Select value={formData.city} onChange={handleChange("city")}>
                <MenuItem value="chennai">Chennai</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="State"
              fullWidth
              value={formData.state}
              onChange={handleChange("state")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="ZIP Code"
              fullWidth
              value={formData.zip}
              onChange={handleChange("zip")}
            />
          </Grid>
        </Grid>

        {/* 👇 Buttons */}
        <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              color: "#6b7280",
              borderColor: "#d1d5db",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: "#7c3aed",
            }}
            onClick={() => navigate("/professional-info")}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default PersonalInfo;
