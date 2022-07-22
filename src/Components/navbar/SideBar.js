import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaGlobe} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'
import x from '../../img/menu-icon.svg'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import logo from '../../img/logo.png'

const SideBar = ({showNav, setShowNav}) => {
  return (
    <div className='burgerOpen'
    style={{
        transform:`${showNav ? "translateX(0)" : "translateX(100%)"}`,
        transition:"1s ease-in",
        position:"absolute",
        zIndex:'1000',
        top:"0"
        // display:`${showNav ? "block" : "none"}`
    }}
>
    <div className='topOpen'>
         <div className='logoOpen'>
             <img src={logo} />
        </div>
        <div className='engOpen'>
            <div className='engContent-left'>
                <FaGlobe />
                English
                <FaCaretDown />
            </div>
            <div className='engContent-right'>
                <a className='fotSocCrcOpen ' href='#'><FaFacebookF /></a>
                <a className='fotSocCrcOpen ' href='#'><FaInstagram /></a>
                <a className='fotSocCrcOpen ' href='#'><FaLinkedinIn /></a>
            </div>
        </div>
        <div className='xOpen' onClick={() => setShowNav(false)}>
            <img src={x} />
        </div>
    </div>
    <div className='midContentOpen container'>
        <NavLink to='/' onClick={() => setShowNav(false)}>
            Home <span>/ 01</span>
        </NavLink>
        <NavLink to='/about' onClick={() => setShowNav(false)}>
            About us <span>/ 02</span>
        </NavLink>
        <NavLink to='/services' onClick={() => setShowNav(false)}>
            Services <span>/ 03</span>
        </NavLink>
        <NavLink to='' onClick={() => setShowNav(false)}>
            Contact <span>/ 04 </span>
        </NavLink>
    </div>
    <div className='botOpen container'>
        <div className='leftBotOpen'>
            <p>
                Terms of service
            </p>
            /
            <p>
                Privacy Policy
            </p>
        </div>
        <div className='rightBotOpen'>
            Kingdom d.o.o. 2022. All Rights Reserved.
        </div>
    </div>
</div>
  )
}

export default SideBar