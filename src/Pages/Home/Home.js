import React from 'react'
import './Home.css'
import {FaAngleRight} from 'react-icons/fa'
import dash from '../../img/Rectangle 178.png'
import dashBlue from '../../img/Rectangle 178.svg'
import downDash from '../../img/arrow.png'

const Home = () => {
  return (
    <div>
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
    <div className='container'>
        <div className='aboutTop'>
            <img src={dashBlue} />
            ABOUT US
        </div>
        <div>
            Our mission <br />
            & vission
        </div>
    </div>
    </div>
  )
}

export default Home