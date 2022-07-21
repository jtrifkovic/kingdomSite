import React from 'react'
import './Footer.css'
import {FaAngleRight} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='container'>
        <div className='footerTitl'>
            <h1>Let's create <br />
                something awesome.
            </h1>
            <button className='footBtn'>
                Challenge us
                <FaAngleRight />
            </button>
        </div>
    </div>
</footer>
  )
}

export default Footer