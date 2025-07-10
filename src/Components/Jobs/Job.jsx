// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Chip,
//   Grid,
//   Button,
//   TextField,
//   InputAdornment,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import Header from "../Dash/Header";
// import briefcase from "../../Assests/briefcase 04.png";
// import location from "../../Assests/location.svg";
// import { useNavigate } from "react-router-dom"; // Assuming you have a Header component



// const jobData = {
    
//   active: [
//     {
//       title: "UI/UX Designer",
//       category: "Design",
//       tags: ["Design", "Full Time", "Remote"],
//       location: "California, USA",
//       salary: "$3600",
//     },
//     {
//       title: "Sr. UX Researcher",
//       category: "Design",
//       tags: ["Design", "Full Time"],
//       location: "New York, USA",
//       salary: "$1500",
//     },
//     {
//       title: "BDM",
//       category: "Sales",
//       tags: ["Sales", "Full Time"],
//       location: "New York, USA",
//       salary: "$1000",
//     },
//     {
//       title: "React JS",
//       category: "Developer",
//       tags: ["Developer", "Full Time"],
//       location: "California, USA",
//       salary: "$2000",
//     },
//   ],
//   inactive: [
//     {
//       title: "Hr Executive",
//       category: "HR",
//       tags: ["HR", "Full Time", "Remote"],
//       location: "California, USA",
//       salary: "$3600",
//     },
//     {
//       title: "Python Developer",
//       category: "Developer",
//       tags: ["Developer", "Full Time"],
//       location: "New York, USA",
//       salary: "$1500",
//     },
//   ],
//   completed: [
//     {
//       title: "UI/UX Designer",
//       category: "Design",
//       tags: ["Design", "Full Time", "Remote"],
//       location: "California, USA",
//       salary: "$3600",
//     },
//     {
//       title: "Sr. UX Researcher",
//       category: "Design",
//       tags: ["Design", "Full Time"],
//       location: "New York, USA",
//       salary: "$1500",
//     },
//     {
//       title: "BDM",
//       category: "Sales",
//       tags: ["Sales", "Full Time"],
//       location: "New York, USA",
//       salary: "$1000",
//     },
//   ],
// };

// const JobCard = ({ job }) => {
//   const navigate = useNavigate();
//   return (
//     <Card
//       variant="outlined"
//       sx={{
//         borderRadius: 2,
//         mb: 2,
//         width: "300px",
//         height: "170px",
//         ml: 2,
//         border: "0px solid rgba(162, 161, 168, 0.2)",
//         boxShadow: "0px 0px 0px 0px white",
//         backgroundColor: "rgba(162, 161, 168, 0.05)",
//       }}
//     >
//       <Box
//         sx={{
//           width: "300px",
//           height: "150px",
//           border: "0px solid rgba(162, 161, 168, 0.2)",

//           borderRadius: 2,
//           boxShadow: "0px 0px 0px 0px white",
//         }}
//       >
//         <CardContent sx={{}}>
//           <Box display="flex" alignItems="center" gap={1} mb={1}>
//             <img
//               src={briefcase}
//               alt="job-icon"
//               style={{ width: 24, height: 24 }}
//             />
//             <Box>
//               <Typography fontWeight={600} sx={{ fontFamily: "Lexend" }}>
//                 {job.title}
//               </Typography>
//               <Typography
//                 fontSize={12}
//                 color="text.secondary"
//                 sx={{
//                   fontFamily: "Lexend",
//                   color: "gray",
//                   fontWeight: 300,
//                   fontSize: "14px",
//                   lineHeight: "22px",
//                   letterSpacing: 0,
//                   verticalAlign: "middle",
//                 }}
//               >
//                 {job.category}
//               </Typography>
//             </Box>
//           </Box>
//           <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
//             {job.tags.map((tag, idx) => (
//               <Chip
//                 key={idx}
//                 label={tag}
//                 size="medium"
//                 sx={{
//                   backgroundColor: "rgba(113, 82, 243, 1)",
//                   color: "white",
//                   fontSize: 11,
//                   width: "70px",
//                   height: "34px",
//                   gap: "10px",
//                   borderRadius: "5px",
//                   padding: "0px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   fontFamily: "Lexend",
//                 }}
//               />
//             ))}
//           </Box>
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Box display="flex" alignItems="center" gap={0.5}>
//               <img
//                 src={location}
//                 alt="locationicon"
//                 style={{ width: 24, height: 24 }}
//               />
//               <Typography
//                 fontSize={13}
//                 sx={{
//                   fontFamily: "Lexend",
//                   size: "14px",
//                   lineHeight: "22px",
//                   letterSpacing: 0,
//                   verticalAlign: "middle",
//                 }}
//               >
//                 {job.location}
//               </Typography>
//             </Box>
//             <Typography
//               fontWeight={600}
//               sx={{
//                 fontFamily: "Lexend",
//                 fontWeight: 600,
//                 fontSize: "16px",
//                 lineHeight: "26px",
//                 letterSpacing: "0%",
//                 textAlign: "right",
//                 verticalAlign: "middle",
//               }}
//             >
//               {job.salary}/Month
//             </Typography>
//           </Box>
//         </CardContent>
//       </Box>
//     </Card>
//   );
// };

// const JobBoard = () => {
//   const navigate = useNavigate();
//   return (
//     <Box>
//       <Header />

//       <Box
//         p={3}
//         sx={{
//           ml: 43,
//           mt: "-1530px",
//           border: "1px solid rgba(162, 161, 168, 0.2)",
//           borderRadius: 2,
//           boxShadow: "0px 0px 0px 0px white",
//           backgroundColor: "#fff",
//           width: "1080px",
//           height: "934px",
//         }}
//       >
//         <Box display="flex" alignItems="center" mb={3}>
//           <TextField
//             placeholder="Search"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//             sx={{ width: 300 }}
//           />
//           <Button
//             variant="contained"
//             startIcon={<AddCircleOutlineIcon />}
//             sx={{
//               backgroundColor: "rgba(113, 82, 243, 1)",
//               textTransform: "none",
//               borderRadius: 2,
//               fontFamily: "Lexend",
//               width: "176px",
//               height: "50px",
//               gap: "10px",
//               padding: "20px",
//               ml: 72,
//             }}
//             onClick={() => navigate("/add-new-job")} // Navigate to Add New Job page
//           >
//             Add New Job
//           </Button>
//         </Box>
//         <Grid container spacing={3}>
//           <Grid
//             item
//             xs={12}
//             md={4}
//             pt={2}
//             sx={{
//               width: "333px",
//               height: "802px",
//               gap: "10px",
//               border: "1px solid rgba(162, 161, 168, 0.2)",
//               borderRadius: 2,
//               boxShadow: "0px 0px 0px 0px white",
//               backgroundColor: "#fff",
//             }}
//           >
//             <Typography fontWeight={600} mb={2} ml={2}>
//               <span style={{ color: "#FFBF00" }}>●</span> Active Jobs
//             </Typography>
//             {jobData.active.map((job, index) => (
//               <JobCard key={index} job={job} />
//             ))}
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             md={4}
//             pt={2}
//             sx={{
//               width: "333px",
//               height: "802px",
//               gap: "10px",
//               border: "1px solid rgba(162, 161, 168, 0.2)",
//               borderRadius: 2,
//               boxShadow: "0px 0px 0px 0px white",
//               backgroundColor: "#fff",
//             }}
//           >
//             <Typography fontWeight={600} mb={2} ml={2}>
//               <span style={{ color: "#FF6B6B" }}>●</span> Inactive Jobs
//             </Typography>
//             {jobData.inactive.map((job, index) => (
//               <JobCard key={index} job={job} />
//             ))}
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             md={4}
//             pt={2}
//             sx={{
//               width: "333px",
//               height: "802px",
//               gap: "10px",
//               border: "1px solid rgba(162, 161, 168, 0.2)",
//               borderRadius: 2,
//               boxShadow: "0px 0px 0px 0px white",
//               backgroundColor: "#fff",
//             }}
//           >
//             <Typography fontWeight={600} mb={2} ml={2}>
//               <span style={{ color: "#1DD75B" }}>●</span> Completed Jobs
//             </Typography>
//             {jobData.completed.map((job, index) => (
//               <JobCard key={index} job={job} />
//             ))}
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default JobBoard;











import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import locationIcon from "../../Assests/location.svg";
import briefcase from "../../Assests/briefcase 04.png";
import Header from "./Header";
import AddJobFormModal from "./AddNewJob"; // Import the modal

const jobData = {
  active: [
    {
      title: "UI/UX Designer",
      category: "Design",
      tags: ["Design", "Full Time", "Remote"],
      location: "California, USA",
      salary: "$3600",
    },
    {
      title: "Sr. UX Researcher",
      category: "Design",
      tags: ["Design", "Full Time"],
      location: "New York, USA",
      salary: "$1500",
    },
    {
      title: "BDM",
      category: "Sales",
      tags: ["Sales", "Full Time"],
      location: "New York, USA",
      salary: "$1000",
    },
    {
      title: "React JS",
      category: "Developer",
      tags: ["Developer", "Full Time"],
      location: "California, USA",
      salary: "$2000",
    },
  ],
  inactive: [
    {
      title: "Hr Executive",
      category: "HR",
      tags: ["HR", "Full Time", "Remote"],
      location: "California, USA",
      salary: "$3600",
    },
    {
      title: "Python Developer",
      category: "Developer",
      tags: ["Developer", "Full Time"],
      location: "New York, USA",
      salary: "$1500",
    },
  ],
  completed: [
    {
      title: "UI/UX Designer",
      category: "Design",
      tags: ["Design", "Full Time", "Remote"],
      location: "California, USA",
      salary: "$3600",
    },
    {
      title: "Sr. UX Researcher",
      category: "Design",
      tags: ["Design", "Full Time"],
      location: "New York, USA",
      salary: "$1500",
    },
    {
      title: "BDM",
      category: "Sales",
      tags: ["Sales", "Full Time"],
      location: "New York, USA",
      salary: "$1000",
    },
  ],
};

const JobCard = ({ job }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        mb: 2,
        width: "300px",
        height: "170px",
        ml: 2,
        border: "0px solid rgba(162, 161, 168, 0.2)",
        backgroundColor: "rgba(162, 161, 168, 0.05)",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <img src={briefcase} alt="job-icon" style={{ width: 24, height: 24 }} />
          <Box>
            <Typography fontWeight={600} fontFamily="Lexend">
              {job.title}
            </Typography>
            <Typography
              fontSize={12}
              color="text.secondary"
              fontFamily="Lexend"
              fontWeight={300}
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              {job.category}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
          {job.tags.map((tag, idx) => (
            <Chip
              key={idx}
              label={tag}
              size="medium"
              sx={{
                backgroundColor: "rgba(113, 82, 243, 1)",
                color: "white",
                fontSize: 11,
                width: "70px",
                height: "34px",
                borderRadius: "5px",
                fontFamily: "Lexend",
              }}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={0.5}>
            <img src={locationIcon} alt="location" style={{ width: 24, height: 24 }} />
            <Typography fontSize={13} fontFamily="Lexend">
              {job.location}
            </Typography>
          </Box>
          <Typography
            fontWeight={600}
            fontFamily="Lexend"
            fontSize="16px"
            lineHeight="26px"
            textAlign="right"
          >
            {job.salary}/Month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const JobBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box>
      <Header />
      <Box
        p={3}
        sx={{
          ml: 43,
          mt: "-1530px",
          border: "1px solid rgba(162, 161, 168, 0.2)",
          borderRadius: 2,
          backgroundColor: "#fff",
          width: "1080px",
          height: "934px",
        }}
      >
        <Box display="flex" alignItems="center" mb={3}>
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: 300 }}
          />
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              backgroundColor: "rgba(113, 82, 243, 1)",
              textTransform: "none",
              borderRadius: 2,
              fontFamily: "Lexend",
              width: "176px",
              height: "50px",
              ml: 72,
            }}
            onClick={() => setModalOpen(true)} // Open Modal
          >
            Add New Job
          </Button>
        </Box>

        <Grid container spacing={3}>
          {["active", "inactive", "completed"].map((section, idx) => (
            <Grid
              key={section}
              item
              xs={12}
              md={4}
              pt={2}
              sx={{
                width: "333px",
                height: "802px",
                border: "1px solid rgba(162, 161, 168, 0.2)",
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <Typography fontWeight={600} mb={2} ml={2}>
                <span style={{ color: ["#FFBF00", "#FF6B6B", "#1DD75B"][idx] }}>
                  ●
                </span>{" "}
                {section.charAt(0).toUpperCase() + section.slice(1)} Jobs
              </Typography>
              {jobData[section].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal Integration */}
      <AddJobFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default JobBoard;
