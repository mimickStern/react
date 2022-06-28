import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import StuInfo from './StuInfo'

const Student = ({stu}) => {
  return (
    <div style={{color:'coral'}}>
        {stu.name},{stu.birth}<br></br>{stu.major},{stu.status}<br></br> 
        <Link to="/stuinfo"><img src='./random.jpeg'></img></Link><hr></hr>
        <Outlet/>
        </div>
  )
}

export default Student