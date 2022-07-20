import React from 'react'
import "./About.css";
import dash from '../../img/Rectangle 178.png'
import dashBlue from '../../img/Rectangle 178.svg'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'




const aboutUs = () => {
  return (
    <div>
      <div className='header'>
        <div className='headerTextWrapper'>
          <h1 className='headerText'>Do what we love and <br/>work with passion</h1>
        
        <div className='navigator'>
          <div className='navigatorWrapper'>
          </div>
          <div className='navigatorHolder'>
          <h4>Home</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>About Us</h4>
          </div>
        </div>
        </div>
      </div>
      <div className='aboutWrapper'>
        <div className='aboutSection'>
          <div className='aboutTitle'>
            <div className='aboutLineHolder'>
              <img src={dashBlue}/>
              <h4 className='blueText'>ABOUT US</h4>
              </div>
              <h1 className="missionText">Our mission <br/> & vission</h1>
          </div>
          <div className='missionHolder'>
          <div className='misssionHeadTitle'>
            <h4>OUR MISSION</h4>
          </div>
          <p className='missionParagraph'>We want to improve our knowledge in the future <br/>
              and to work on many more inspiring projects,<br/> 
              We do not want mass production but a dedicated,<br/>
              professional approach  to every client.</p>
              <div className='missionPagination'>
               <b>01</b> / 02
              </div>
          </div>
          <div className='missionArrowWrapper'>
          <div className='arrowLeft'><FaAngleRight/></div>
          <div className='arrowRight'><FaAngleLeft/></div>
          </div>  
        </div>
      </div>
      <div className='servicesWrapper'>
          <div className='services'>
            <div className='servicesHolder'>
              <img src={dash}/>
              SERVICES
            </div>
            <h1 className='servicesHeading'>Since 2011, we have provided amazing <br/>
solutions for enterprises of all sizes.</h1>


          </div>

        </div>

    
    </div>
  )
}

export default aboutUs