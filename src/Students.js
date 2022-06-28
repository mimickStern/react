import React from 'react'
import {  Link, Outlet } from "react-router-dom";
import Student from './Student';
import StuInfo from './StuInfo';
import {getStudents} from "./studentData"

const Students = () => {
  const Pupil = getStudents()
  return (
    <div>
      {/* <Link to="/student">Student</Link> */}
      {Pupil.map (pupil => <div><Student stu = {pupil}></Student></div>)}
      <Outlet/>
    </div>
  )
}

export default Students