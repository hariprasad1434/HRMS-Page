import React from 'react'
import Box from '@mui/material/Box'
import Job from '../Components/Jobs/Job'
import AddJobForm from '../Components/Jobs/AddNewJob'
function Jobs() {
  return (
    <>
      <Job />
      <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <AddJobForm />
    </Box>
    </>
  )
}

export default Jobs