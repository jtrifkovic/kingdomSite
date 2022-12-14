// IMAGES
import logo from '../../img/logo.png'
import x from '../../img/menu-icon.svg'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {FaGlobe} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'


const SideBar = ({showNav, setShowNav}) => {
  return (
    <div className='burgerOpen'
    style={{
        transform:`${showNav ? "translateX(0)" : "translateX(100%)"}`,
        transition:"0.6s ease-in",
        position:"fixed",
        zIndex:'1000',
        minHeight:"100vh",
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
                <a className='fotSocCrcOpen ' href='https://www.linkedin.com/company/kingdomdoo/' target="_blank"><FaLinkedinIn /></a>
            </div>
        </div>
        <div className='xOpen' onClick={() => setShowNav(false)}>
            <img src={x} />
        </div>
    </div>
    <div className='midContentOpen containerOpen'>
        <NavLink to='/' onClick={() => setShowNav(false)}>
            Home <span>/ 01</span>
        </NavLink>
        <NavLink to='/about' onClick={() => setShowNav(false)}>
            About us <span>/ 02</span>
        </NavLink>
        <NavLink to='/services' onClick={() => setShowNav(false)}>
            Services <span>/ 03</span>
        </NavLink>
        <NavLink to='/contact' onClick={() => setShowNav(false)}>
            Contact <span>/ 04 </span>
        </NavLink>
    </div>
    <div className='botOpen containerOpen'>
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