import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Switch,
  Divider,
  styled,
} from "@mui/material";
import Header from "./Header";

// ✅ Styled Switch with custom green color
const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'rgba(52, 199, 89, 1)',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: 'rgba(52, 199, 89, 1)',
  },
}));

const SettingsPanel = () => {
  const [appearance, setAppearance] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [twoFactor, setTwoFactor] = useState(true);
  const [mobilePush, setMobilePush] = useState(true);
  const [desktopPush, setDesktopPush] = useState(true);
  const [emailNotify, setEmailNotify] = useState(true);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          p: 2,
          fontFamily: "Lexend, sans-serif",
          width: "1080px",
          height: "558px",
          ml: 45,
          mt: "-1530px",
        }}
      >
        {/* Appearance */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Box>
            <Typography fontWeight="600" sx={{ fontFamily: "Lexend" }}>
              Appearance
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Lexend", color: "gray" }}>
              Customize how your theme looks on your device
            </Typography>
          </Box>
          <FormControl size="small">
            <Select
              value={appearance}
              onChange={(e) => setAppearance(e.target.value)}
              sx={{ borderRadius: 2, minWidth: 100, fontFamily: "Lexend" }}
            >
              <MenuItem value="Light">Light</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
              <MenuItem value="System">System</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider />

        {/* Language */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Box>
            <Typography fontWeight="600" sx={{ fontFamily: "Lexend" }}>
              Language
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Lexend", color: "gray" }}>
              Select your language
            </Typography>
          </Box>
          <FormControl size="small">
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              sx={{ borderRadius: 2, minWidth: 100, fontFamily: "Lexend" }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Tamil">Tamil</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider />

        {/* Two-factor Auth */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Box>
            <Typography fontWeight="600" sx={{ fontFamily: "Lexend" }}>
              Two-factor Authentication
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Lexend", color: "gray" }}>
              Keep your account secure by enabling 2FA via mail
            </Typography>
          </Box>
          <GreenSwitch checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} />
        </Box>
        <Divider />

        {/* Mobile Push Notifications */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Box>
            <Typography fontWeight="600" sx={{ fontFamily: "Lexend" }}>
              Mobile Push Notifications
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Lexend", color: "gray" }}>
              Receive push notification
            </Typography>
          </Box>
          <GreenSwitch checked={mobilePush} onChange={(e) => setMobilePush(e.target.checked)} />
        </Box>
        <Divider />

        {/* Desktop Notification */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Box>
            <Typography fontWeight="600" sx={{ fontFamily: "Lexend" }}>
              Desktop Notification
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Lexend", color: "gray" }}>
              Receive push notification in desktop
            </Typography>
          </Box>
          <GreenSwitch checked={desktopPush} onChange={(e) => setDesktopPush(e.target.checked)} />
        </Box>
        <Divider />

        {/* Email Notifications */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Box>
            <Typography fontWeight="600" sx={{ fontFamily: "Lexend" }}>
              Email Notifications
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Lexend", color: "gray" }}>
              Receive email notification
            </Typography>
          </Box>
          <GreenSwitch checked={emailNotify} onChange={(e) => setEmailNotify(e.target.checked)} />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPanel;
