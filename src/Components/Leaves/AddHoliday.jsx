import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";

import calendar from "../../Assests/calendar.svg";

const AddHolidayModal = ({ open, onClose, onAddHoliday }) => {
  const [form, setForm] = useState({
    holidayName: "",
    holidayDate: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleDateChange = (newDate) => {
    setForm({ ...form, holidayDate: newDate });
    setErrors({ ...errors, holidayDate: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.holidayName) newErrors.holidayName = "Required";
    if (!form.holidayDate) newErrors.holidayDate = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    if (onAddHoliday) {
      onAddHoliday(form);
    }
    setForm({ holidayName: "", holidayDate: null });
    setErrors({});
    onClose();
    navigate("/leaves");
  };

  const handleCancel = () => {
    setForm({ holidayName: "", holidayDate: null });
    setErrors({});
    onClose();
    navigate("/leaves");
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 3,
          backgroundColor: "#ffffff",
        },
      }}
    >
      <DialogContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          sx={{ fontFamily: "Lexend", textAlign: "left" }}
        >
          Add New Holiday
        </Typography>

        <TextField
          fullWidth
          placeholder="Holiday Name"
          variant="outlined"
          value={form.holidayName}
          onChange={handleChange("holidayName")}
          error={!!errors.holidayName}
          helperText={errors.holidayName}
          sx={{
            mb: 2,
            borderRadius: 2,
            input: { padding: "10px 14px", fontFamily: "Lexend" },
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={form.holidayDate}
            onChange={handleDateChange}
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
                placeholder: "Select Date",
                error: !!errors.holidayDate,
                helperText: errors.holidayDate,
                sx: {
                  mb: 3,
                  borderRadius: 2,
                  input: { padding: "10px 14px" },
                },
              },
            }}
          />
        </LocalizationProvider>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleCancel}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                height: "50px",
                fontFamily: "Lexend",
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                borderRadius: 2,
                backgroundColor: "#7b61ff",
                textTransform: "none",
                height: "50px",
                fontFamily: "Lexend",
                "&:hover": {
                  backgroundColor: "#684de0",
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

export default AddHolidayModal;