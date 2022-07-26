import React from 'react'
import {Link} from 'react-router-dom'
import "../Pages/About/About.css"

const Navigator = ({name}) => {
  return (
    <div>
        <div className='navigator'>
    <div className='navigatorWrapper'>
    </div>
      <div className='navigatorHolder'>
        <Link style={{
          color:"#ffffff"
        }} to='/'>
        <h4>Home</h4>
        </Link>
        <i className="fa-solid fa-angle-right"></i>
        <h4>{name}</h4>
      </div>
    </div>
    </div>
  )
}

export default Navigator