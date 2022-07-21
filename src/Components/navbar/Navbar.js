import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import burger from '../../img/menu-icon.png'
import {NavLink} from 'react-router-dom'
import {FaGlobe} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div>
            <ul className='nav-links'>
            <NavLink className="navLink" to="/" >
                Home
            </NavLink>
            /
            <NavLink className="navLink" to="/about" >
                About us
            </NavLink>
            /
            <NavLink className="navLink" to="/services" >
                Services
            </NavLink>
            </ul>
        </div>
        <div className='language'>
        <FaGlobe />
        English
        <FaCaretDown />
        <button className='navBtn'>
            Check Availability
            <FaAngleRight />
        </button>
        </div>
        <div className='burger'>
           <img src={burger} />
        </div>
    </div>
  )
}

export default Navbar