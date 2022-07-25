import React from 'react'
import './Footer.css'

// ICONS
import {FaAngleRight} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaAngleUp} from 'react-icons/fa'

const Footer = ({divRef, topRef}) => {

  return (
    <footer className='footer'>
    <div className='container brBot'>
        <div className='footerTitl'>
            <h1>Let's create <br />
                something awesome.
            </h1>
            <button className='footBtn'>
                Challenge us
                <FaAngleRight />
            </button>
        </div>
        <div className='footerSoc'>
            <div className='leftPartPop'>
            <p>HQ:</p>
            <p>Dušana Baranina 15, Bijeljina, <br />
               Serb Republic 76000, BA
            </p>
            </div>
            <div className='rightPartPop'>
                <a className='fotSocCrc active' href='#'><FaFacebookF /></a>
                <a className='fotSocCrc ' href='#'><FaInstagram /></a>
                <a className='fotSocCrc ' href='#'><FaLinkedinIn /></a>
            </div>
        </div>
        <div className='leftPartTwo pt25'>
            <p>Call us:</p>
            <p>+387 65 233 266</p>
        </div>
    </div>
    <div className='container' ref={divRef}>
        <div className='botFlex'>
        <div className='leftBot'>
            <p>Terms of service</p>
            /
            <p>Privacy Policy</p>
        </div>
        <div className='midBot' onClick={() => {
          topRef.current.scrollIntoView({ behavior: "smooth" });
        }}>
            <button>
                <FaAngleUp />
            </button>
        </div>
        <div className='rightBot'>
            Kingdom d.o.o. 2022. All Rights Reserved.
        </div>
        </div>
    </div>
</footer>
  )
}

export default Footer