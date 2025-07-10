import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar";
import button from "../../Assests/Button.svg";
import per1 from "../../Assests/per 1.svg";
import Button2 from "../../Assests/Button 2.svg";
import Button3 from "../../Assests/Button 3.svg";
import Button4 from "../../Assests/Button 4.svg";
import per2 from "../../Assests/per 2.svg";
import per3 from "../../Assests/per 3.svg";
import per4 from "../../Assests/per 4.svg";

function Details() {
  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 5, mt: -193, ml: 45 }}
      >
        <Box
          sx={{
            width: "313px",
            height: "154px",
            border: "1px  solid rgba(162, 161, 168, 0.2)",
            pt: 2,
            borderRadius: 5,
            position: "relative",
            top: 25,
          }}
        >
          <img
            src={button}
            alt="button"
            style={{
              width: "40px",
              height: "40px",
              paddingLeft: "15px",
            }}
          />
          <Typography
            sx={{
              ml: "65px",
              mt: "-37px",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: 0,
              fontFamily: "Lexend",
            }}
          >
            Total Employee
          </Typography>
          <Box flexDirection={"row"}>
            <Typography
              sx={{
                fontFamily: "Lexend",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "0px",
                letterSpacing: 0,
                mt: "40px",
                mb: "30px",
                width: "50px",
                ml: "15px",
              }}
            >
              560
              <img
                src={per1}
                alt="percentage"
                style={{
                  marginLeft: "230px",
                  marginTop: "-50px",
                }}
              />
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography
            pl={2}
            sx={{
              color: "rgba(162, 161, 168, 1)",
              ontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: 0,
            }}
          >
            Update: July 16, 2023
          </Typography>
        </Box>
        <Box
          sx={{
            width: "313px",
            height: "154px",
            border: "1px  solid rgba(162, 161, 168, 0.2)",
            pt: 2,
            borderRadius: 5,
            position: "relative",
            top: 25,
          }}
        >
          <img
            src={Button2}
            alt="button"
            style={{
              width: "40px",
              height: "40px",
              paddingLeft: "15px",
            }}
          />
          <Typography
            sx={{
              ml: "65px",
              mt: "-37px",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: 0,
              fontFamily: "Lexend",
            }}
          >
            Total Applicant
          </Typography>
          <Box flexDirection={"row"}>
            <Typography
              sx={{
                fontFamily: "Lexend",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "0px",
                letterSpacing: 0,
                mt: "40px",
                mb: "30px",
                width: "50px",
                ml: "15px",
              }}
            >
              560
              <img
                src={per2}
                alt="percentage"
                style={{
                  marginLeft: "230px",
                  marginTop: "-50px",
                }}
              />
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography
            pl={2}
            sx={{
              color: "rgba(162, 161, 168, 1)",
              ontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: 0,
            }}
          >
            Update: July 16, 2023
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 5, mt: 2, ml: 45 }}
      >
        <Box
          sx={{
            width: "313px",
            height: "154px",
            border: "1px  solid rgba(162, 161, 168, 0.2)",
            pt: 2,
            borderRadius: 5,
            position: "relative",
            top: 25,
          }}
        >
          <img
            src={Button3}
            alt="button"
            style={{
              width: "40px",
              height: "40px",
              paddingLeft: "15px",
            }}
          />
          <Typography
            sx={{
              ml: "65px",
              mt: "-37px",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: 0,
              fontFamily: "Lexend",
            }}
          >
            Today Attendance
          </Typography>
          <Box flexDirection={"row"}>
            <Typography
              sx={{
                fontFamily: "Lexend",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "0px",
                letterSpacing: 0,
                mt: "40px",
                mb: "30px",
                width: "50px",
                ml: "15px",
              }}
            >
              560
              <img
                src={per3}
                alt="percentage"
                style={{
                  marginLeft: "230px",
                  marginTop: "-50px",
                }}
              />
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography
            pl={2}
            sx={{
              color: "rgba(162, 161, 168, 1)",
              ontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: 0,
            }}
          >
            Update: July 16, 2023
          </Typography>
        </Box>
        <Box
          sx={{
            width: "313px",
            height: "154px",
            border: "1px  solid rgba(162, 161, 168, 0.2)",
            pt: 2,
            borderRadius: 5,
            position: "relative",
            top: 25,
          }}
        >
          <img
            src={Button4}
            alt="button"
            style={{
              width: "40px",
              height: "40px",
              paddingLeft: "15px",
            }}
          />
          <Typography
            sx={{
              ml: "65px",
              mt: "-37px",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: 0,
              fontFamily: "Lexend",
            }}
          >
            Total Projects
          </Typography>
          <Box flexDirection={"row"}>
            <Typography
              sx={{
                fontFamily: "Lexend",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "0px",
                letterSpacing: 0,
                mt: "40px",
                mb: "30px",
                width: "50px",
                ml: "15px",
              }}
            >
              560
              <img
                src={per4}
                alt="percentage"
                style={{
                  marginLeft: "230px",
                  marginTop: "-50px",
                }}
              />
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography
            pl={2}
            sx={{
              color: "rgba(162, 161, 168, 1)",
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: 0,
            }}
          >
            Update: July 16, 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
