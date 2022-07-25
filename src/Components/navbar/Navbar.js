import {useState} from 'react'
import './Navbar.css'

// COMPONENTS 
import SideBar from './SideBar'

// IMAGES
import logo from '../../img/logo.png'
import burger from '../../img/menu-icon.png'
import {NavLink} from 'react-router-dom'
import {FaGlobe} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

  return (
    <>
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
        <div className='none'>
        <FaGlobe />
        English
        <FaCaretDown />
        </div>
        <NavLink to="/contact" >
          <button className='navBtn'>
           Check Availability
            <FaAngleRight />
        </button>
        </NavLink>
        </div>
        <div className='burger' onClick={() => setShowNav(true)}>
           <img src={burger} />
        </div>
    </div>
    <SideBar showNav={showNav} setShowNav={setShowNav} />
    </>
  )
}

export default Navbar