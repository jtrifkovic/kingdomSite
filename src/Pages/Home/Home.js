import React from 'react'
import './Home.css'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleDown} from 'react-icons/fa'
import dash from '../../img/Rectangle 178.png'
import downDash from '../../img/arrow.png'

const Home = () => {
  return (
    <div className='bg-image'>
        <h5>
            <img src={dash} />
            WEB DEVELOPMENT AGENCY
        </h5>
        <h1>
            Our goal is to move <br />
            our industry forward.
        </h1>
        <button className='homeBtn'>
            Find out more
            <FaAngleRight />
        </button>
        <button className='circleBtn'>
            <img src={downDash} />
        </button>
    </div>
  )
}

export default Home