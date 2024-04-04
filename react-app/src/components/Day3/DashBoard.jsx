import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function DashBoard() {
  return (
    <div>
      <h1>Inside the DashBoard</h1>
      <Link to='/dashboard/profile' style={{margin:'10px'}}>Go to Profile Section</Link>
      <Link to='/dashboard/setting' style={{margin:'10px'}}>Go to Setting Section</Link>
      <Outlet/>
    </div>
  )
}

export default DashBoard
