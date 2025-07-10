import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from "react-router-dom";

const ProfessionalInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeId: "",
    userName: "",
    employeeType: "",
    email: "",
    department: "",
    designation: "",
    workingDays: "",
    joiningDate: null,
    officeLocation: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Employee ID"
                value={formData.employeeId}
                onChange={handleChange("employeeId")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="User Name"
                value={formData.userName}
                onChange={handleChange("userName")}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Employee Type</InputLabel>
                <Select
                  value={formData.employeeType}
                  onChange={handleChange("employeeType")}
                  label="Select Employee Type"
                >
                  <MenuItem value="full-time">Full Time</MenuItem>
                  <MenuItem value="part-time">Part Time</MenuItem>
                  <MenuItem value="intern">Intern</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                value={formData.email}
                onChange={handleChange("email")}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Department</InputLabel>
                <Select
                  value={formData.department}
                  onChange={handleChange("department")}
                  label="Select Department"
                >
                  <MenuItem value="engineering">Engineering</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="hr">HR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Designation"
                value={formData.designation}
                onChange={handleChange("designation")}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Working Days</InputLabel>
                <Select
                  value={formData.workingDays}
                  onChange={handleChange("workingDays")}
                  label="Select Working Days"
                >
                  <MenuItem value="5">5 Days</MenuItem>
                  <MenuItem value="6">6 Days</MenuItem>
                  <MenuItem value="flexible">Flexible</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Select Joining Date"
                value={formData.joiningDate}
                onChange={(newVal) =>
                  setFormData({ ...formData, joiningDate: newVal })
                }
                slotProps={{
                  textField: { fullWidth: true },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Office Location</InputLabel>
                <Select
                  value={formData.officeLocation}
                  onChange={handleChange("officeLocation")}
                  label="Select Office Location"
                >
                  <MenuItem value="chennai">Chennai</MenuItem>
                  <MenuItem value="bangalore">Bangalore</MenuItem>
                  <MenuItem value="remote">Remote</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box mt={5} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                px: 4,
                py: 1,
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
                px: 4,
                py: 1,
              }}
              onClick={() => navigate("/documents")}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
};

export default ProfessionalInfo;

