import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
        <h2>Users List</h2>
        <NavLink to='/users/mahesh'>Mahesh</NavLink>
        <NavLink to='/users/varun'>Varun</NavLink>
        <Outlet/>
    </div>
  )
}

export default Users