import React from 'react'
import Header from "../Components/Dash/Header"
import Details from "../Components/Dash/Details"
import Attendance from "../Components/Dash/Attendence"
import Calendar from "../Components/Dash/Calendar"
import AttendanceTable from "../Components/Dash/AttendanceTable"
function Dasboard() {
  return (
    <>
      <Header/>
      <Details/>
      <Attendance/>
      <Calendar/>
      <AttendanceTable/>
    </>
  )
}

export default Dasboard