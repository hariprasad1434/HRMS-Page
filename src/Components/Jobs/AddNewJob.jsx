import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
  Box,
} from "@mui/material";

const AddJobFormModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    department: "",
    jobTitle: "",
    location: "",
    amount: "",
    jobType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.department) newErrors.department = "Required";
    if (!form.jobTitle) newErrors.jobTitle = "Required";
    if (!form.location) newErrors.location = "Required";
    if (!form.amount) newErrors.amount = "Required";
    if (!form.jobType) newErrors.jobType = "Select job type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Form Submitted:", form);
    onClose(); // Close after submit
  };

  const handleCancel = () => {
    setForm({
      department: "",
      jobTitle: "",
      location: "",
      amount: "",
      jobType: "",
    });
    setErrors({});
    onClose(); // Close on cancel
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      maxWidth="xs"
      fullWidth
      sx={{ zIndex: 1300, filter: "blur('20px')" }}
    >
      <DialogContent
        sx={{
          borderRadius: 4,
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          sx={{ fontFamily: "Lexend" }}
        >
          Add New Job
        </Typography>

        <FormControl
          fullWidth
          size="small"
          sx={{
            mb: 1,
          }}
          error={!!errors.department}
        >
          <InputLabel>Select Department</InputLabel>
          <Select
            value={form.department}
            label="Select Department"
            onChange={handleChange("department")}
            sx={{
              width: "383px",
              height: "28px",

              gap: 10,
              borderRadius: 1,
              pb: 4,
              pt: 4,
              borderWidth: 1,
            }}
          >
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Enter Job Title"
          variant="outlined"
          sx={{
            mb: 2,
            width: "383px",
            height: "25px",
            pb: 3,
            borderRadius: "10px",
            borderWidth: 1,
          }}
          value={form.jobTitle}
          onChange={handleChange("jobTitle")}
          error={!!errors.jobTitle}
          helperText={errors.jobTitle}
        />

        <FormControl
          fullWidth
          size="small"
          sx={{ mb: 1 }}
          error={!!errors.location}
        >
          <InputLabel>Select Location</InputLabel>
          <Select
            value={form.location}
            label="Select Location"
            onChange={handleChange("location")}
            sx={{
              width: "383px",
              height: "30px",

              gap: 10,
              borderRadius: 1,
               pb: 4,
              pt: 4,
              borderWidth: 1,
            }}
          >
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Enter Amount"
          variant="outlined"
          sx={{
            mb: 4,
            width: "383px",
            height: "28px",
            ml:"-5px",
            mt: "-5px",
            borderRadius: 1,
            padding: 1,
            borderWidth: 1,
          }}
          value={form.amount}
          onChange={handleChange("amount")}
          error={!!errors.amount}
          helperText={errors.amount}
        />

        <Typography
          variant="subtitle2"
          sx={{
            mb: 1,
            fontFamily: "Lexend",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        >
          Select Type
        </Typography>

        <RadioGroup
          row
          value={form.jobType}
          onChange={handleChange("jobType")}
          sx={{ mb: 2 }}
        >
          <FormControlLabel value="office" control={<Radio />} label="Office" />
          <FormControlLabel
            value="remote"
            control={<Radio />}
            label="Work from Home"
          />
        </RadioGroup>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#815DF2",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#6c4ad4",
                },
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddJobFormModal;
