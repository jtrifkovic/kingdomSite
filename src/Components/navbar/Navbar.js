import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import {NavLink} from 'react-router-dom'
import {FaGlobe} from 'react-icons/fa'
import {FaChevronDown} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div>
            <ul className='nav-links'>
            <NavLink to="/" >
                Home
            </NavLink>
            /
            <NavLink to="/" >
                About us
            </NavLink>
            /
            <NavLink to="/" >
                Services
            </NavLink>
            </ul>
        </div>
        <div className=''>
        <FaGlobe />
        English
        <FaChevronDown />
        </div>
        
    </div>
  )
}

export default Navbar