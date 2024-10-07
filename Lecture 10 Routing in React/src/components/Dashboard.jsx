import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>
        I am dash board
      </h1>
      <div className="dasitem">
      <NavLink to={'courses'}>Courses</NavLink>
      <NavLink to={'mock-test'}>MockTest</NavLink>
      <NavLink to={'reports'}>Reports</NavLink>
      </div>

      <Outlet/>
    </div>
  )
}

export default Dashboard
