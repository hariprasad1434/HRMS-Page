import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  IconButton,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "../../Components/Dash/Header";

import camera from "../../Assests/camera.png";
import personicon from "../../Assests/personicon.svg";
import briefcaseicon from "../../Assests/briefcaseicon.svg";
import documenticon from "../../Assests/documenticon.svg";
import lock from "../../Assests/lock.svg";
import calendar from "../../Assests/calendar.svg";
import upload from "../../Assests/upload.png";

const AddEmployeeForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [dob, setDob] = useState(null);

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    dateOfBirth: "",
    maritalStatus: "",
    gender: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Professional Info
    employeeId: "",
    userName: "",
    employeeType: "",
    department: "",
    designation: "",
    workingDays: "",
    joiningDate: null,
    officeLocation: "",

    // Document Uploads
    appointmentLetter: null,
    salarySlips: null,
    relievingLetter: null,
    experienceLetter: null,

    // Account Access
    accountEmail: "",
    slackId: "",
    skypeId: "",
    githubId: "",
  });

  const steps = [
    "Personal Information",
    "Professional Information",
    "Documents",
    "Account Access",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("Form submitted", formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      emailAddress: "",
      dateOfBirth: "",
      maritalStatus: "",
      gender: "",
      nationality: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      employeeId: "",
      userName: "",
      employeeType: "",
      department: "",
      designation: "",
      workingDays: "",
      joiningDate: null,
      officeLocation: "",
      appointmentLetter: null,
      salarySlips: null,
      relievingLetter: null,
      experienceLetter: null,
      accountEmail: "",
      slackId: "",
      skypeId: "",
      githubId: "",
    });
    setActiveStep(0);
  };

  const renderSelect = (label, field, options) => (
    <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={formData[field]}
          label={label}
          onChange={(e) => handleInputChange(field, e.target.value)}
          sx={{ width: "510px" }}
        >
          {options.map((opt) => (
            <MenuItem key={opt} value={opt.toLowerCase()}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );

  const renderStepContent = () => {
    if (activeStep === 0) {
      return (
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <IconButton
                component="label"
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  p: 2,
                  bgcolor: "rgba(162, 161, 168, 0.05)",
                  width: 100,
                  height: 100,
                }}
              >
                <img src={camera} alt="camera" />
                <input type="file" hidden />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                sx={{ mt: 15, ml: -15, width: 510 }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                sx={{ mt: 15, ml: -1, width: 510 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                value={formData.mobileNumber}
                onChange={(e) =>
                  handleInputChange("mobileNumber", e.target.value)
                }
                sx={{ ml: "3px", width: 510 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                value={formData.emailAddress}
                onChange={(e) =>
                  handleInputChange("emailAddress", e.target.value)
                }
                sx={{ ml: -1, width: 510 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dob}
                  onChange={(newValue) => {
                    setDob(newValue);
                    handleInputChange("dateOfBirth", newValue);
                  }}
                  label="Date of Birth"
                  sx={{ ml: "3px", width: 510 }}
                  slots={{
                    openPickerIcon: () => (
                      <img
                        src={calendar}
                        alt="calendar"
                        style={{ width: "20px", height: "20px" }}
                      />
                    ),
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            {renderSelect("Marital Status", "maritalStatus", [
              "Single",
              "Married",
            ])}
            {renderSelect("Gender", "gender", ["Male", "Female", "Other"])}
            {renderSelect("Nationality", "nationality", ["Indian", "Other"])}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                sx={{
                  ml: "3px",
                  width: "1040px",
                  height: "56px",
                  gap: "20px",
                }}
              />
            </Grid>
            {renderSelect("City", "city", ["Chennai", "Bangalore"])}
            {renderSelect("State", "state", ["Tamil Nadu", "Karnataka"])}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                sx={{ width: 510 }}
              />
            </Grid>
          </Grid>
        </Box>
      );
    }

    if (activeStep === 1) {
      return (
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Employee ID"
                value={formData.employeeId}
                onChange={(e) =>
                  handleInputChange("employeeId", e.target.value)
                }
                sx={{ ml: "3px", width: "510px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="User Name"
                value={formData.userName}
                onChange={(e) => handleInputChange("userName", e.target.value)}
                sx={{ ml: "3px", width: "510px" }}
              />
            </Grid>
            {renderSelect("Select Employee Type", "employeeType", [
              "Full-Time",
              "Part-Time",
              "Intern",
            ])}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                value={formData.emailAddress}
                onChange={(e) =>
                  handleInputChange("emailAddress", e.target.value)
                }
                sx={{ ml: "3px", width: "510px" }}
              />
            </Grid>
            {renderSelect("Select Department", "department", [
              "HR",
              "Engineering",
              "Marketing",
            ])}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Designation"
                value={formData.designation}
                onChange={(e) =>
                  handleInputChange("designation", e.target.value)
                }
                sx={{ ml: "3px", width: "510px" }}
              />
            </Grid>
            {renderSelect("Select Working Days", "workingDays", [
              "Mon-Fri",
              "Mon-Sat",
            ])}
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Joining Date"
                  value={formData.joiningDate}
                  onChange={(newValue) =>
                    handleInputChange("joiningDate", newValue)
                  }
                  sx={{ ml: "3px", width: 510 }}
                  slots={{
                    openPickerIcon: () => (
                      <img
                        src={calendar}
                        alt="calendar"
                        style={{ width: "20px", height: "20px" }}
                      />
                    ),
                  }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
            </Grid>
            {renderSelect("Select Office Location", "officeLocation", [
              "Chennai",
              "Bangalore",
              "Hyderabad",
            ])}
          </Grid>
        </Box>
      );
    }

    if (activeStep === 2) {
      const renderUploadBox = (label, field) => (
        <Grid item xs={12} sm={6}>
          <Box
            border="1px dashed #A89BFE"
            borderRadius="10px"
            p={3}
            textAlign="center"
            sx={{
              cursor: "pointer",
              backgroundColor: "#fdfdff",
              width: "410px",
              height: "150px",
              gap: 10,
              ml: "10px",
              borderRadius: 10,
              borderWidth: 1,
              padding: 2,
            }}
          >
            <Typography variant="subtitle1" fontWeight={500}>
              {label}
            </Typography>
            <Box mt={2}>
              <label htmlFor={field}>
                <input
                  type="file"
                  id={field}
                  hidden
                  accept=".jpeg,.jpg,.pdf"
                  onChange={(e) => handleFileUpload(field, e.target.files[0])}
                />
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Button
                    variant="contained"
                    sx={{
                      p: 2,
                      background: "#7b61ff",
                      width: "50px",
                      height: "50px",
                      gap: "10px",
                      borderRadius: "10px",
                      
                    }}
                  >
                    <img
                      src={upload}
                      alt="upload"
                      style={{ width: 20, height: 20 }}
                    />
                  </Button>
                  <Typography variant="body2" mt={1}>
                    Drag & Drop or{" "}
                    <span style={{ color: "#7b61ff", cursor: "pointer" }}>
                      choose file
                    </span>{" "}
                    to upload
                  </Typography>
                  <Typography variant="caption" color="text.secondary" mt={1}>
                    Supported formats: .jpeg, .pdf
                  </Typography>
                </Box>
              </label>
            </Box>
          </Box>
        </Grid>
      );

      return (
        <Box mt={3}>
          <Grid container spacing={3}>
            {renderUploadBox("Upload Appointment Letter", "appointmentLetter")}
            {renderUploadBox("Upload Salary Slips", "salarySlips")}
            {renderUploadBox("Upload Relieving Letter", "relievingLetter")}
            {renderUploadBox("Upload Experience Letter", "experienceLetter")}
          </Grid>
        </Box>
      );
    }

    if (activeStep === 3) {
      return (
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Email Address"
                value={formData.accountEmail}
                onChange={(e) =>
                  handleInputChange("accountEmail", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Slack ID"
                value={formData.slackId}
                onChange={(e) => handleInputChange("slackId", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter Skype ID"
                value={formData.skypeId}
                onChange={(e) => handleInputChange("skypeId", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Enter GitHub ID"
                value={formData.githubId}
                onChange={(e) => handleInputChange("githubId", e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      );
    }
  };

  return (
    <Box>
      <Header />
      <Box
        sx={{ width: "1090px", bgcolor: "#fff", p: 3, ml: 43, mt: "-1530px" }}
      >
        <Card>
          <Tabs
            value={activeStep}
            onChange={(e, val) => setActiveStep(val)}
            variant="scrollable"
          >
            {[personicon, briefcaseicon, documenticon, lock].map((icon, i) => (
              <Tab
                key={i}
                label={
                  <Box display="flex" alignItems="center" gap={1}>
                    <img
                      src={icon}
                      alt="icon"
                      style={{ width: 20, height: 20 }}
                    />
                    {steps[i]}
                  </Box>
                }
              />
            ))}
          </Tabs>
          <CardContent>{renderStepContent()}</CardContent>
          <Box display="flex" justifyContent="flex-end" gap={2} p={2}>
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{ borderRadius: 2 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ borderRadius: 2, backgroundColor: "#7b61ff" }}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AddEmployeeForm;
