import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='nav-links'>
            <ul>
            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/" >
                About us
            </NavLink>
            <NavLink to="/" >
                Services
            </NavLink>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar