import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <NavLink to='/' exact>Contacts</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
      </ul>
    </div>
  )
}
