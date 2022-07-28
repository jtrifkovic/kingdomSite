import {useState, useRef } from 'react'
import Navigator from '../../Components/Navigator'
import Slide from 'react-reveal/Slide'
import "./Contact.css";

// IMAGES
import dashBlue from '../../img/Rectangle 178.svg';
import arrow from '../../img/arrow-right.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaAngleUp} from 'react-icons/fa'


const Contact = () => {
  const [inputText, setInputText] = useState({
    "name" : "",
    "email" : "",
    "organization" : "",
    "services" : "",
    "message" : ""

  })

    const divRef = useRef();
    const topRef = useRef();
    const name = "Contact" ; 

    const inputChange = (e) => {
      setInputText({...inputText, [e.target.name] : e.target.value
       })
       console.log(e.target.value);
    }


  return (
    <>
  <div className='header2'  ref={topRef}>
        <div className='headerTextWrapper1'>
          <Slide left>
          <h1 className='headerText1' >
            Our goal is to move <br/>
            our industry forward.
          </h1>
          <Navigator name={name}/>
          </Slide>
        </div>
  </div>
  <div className='contact-middle-section'>
    <div className='mid-wrapper'>
      <div className='faqStart'>
              <img src={dashBlue} />
                  SERVICES
      </div>
             <h1>Check availability</h1>
    </div>
  </div>
  <div className='contact-middle-section1'>
    <div className='input-holder'>
      <label className='contact-label'>
        <span className='input-number'>01</span>What's your name? <br/>
        <input onChange={event =>{inputChange(event)}} name="name" type="text"  value={inputText["name"]}
        className='contact-input' placeholder='John Doe*'/>
      </label>
      <label className='contact-label pt35'>
        <span className='input-number'>02</span>What's your email? <br/>
        <input onChange={event =>{inputChange(event)}} type="text" name="email" value={inputText["email"]}
        className='contact-input' placeholder='john@doe.com'/>
      </label>
      <label className='contact-label pt35'>
        <span className='input-number'>03</span>What's the name of your organization?
        <input onChange={event =>{inputChange(event)}} type="text" name='organization' value={inputText["organization"]}
        className='contact-input' placeholder='Your Company Name &reg;'/>
      </label>
      <label className='contact-label pt35'>
        <span className='input-number'>04</span>What services are you looking for?<br/>
        <input onChange={event =>{inputChange(event)}} type="text" name="services" value={inputText["services"]}
        className='contact-input' placeholder='Web Design, Web Development ...'/>
      </label>
        <label className='contact-label pt35'>
        <span className='input-number'>05</span>Your message <br/>
        <input onChange={event =>{inputChange(event)}} type="text" name='message' value={inputText["message"]}
        className='contact-input' placeholder='Hello, can you help me with...'/>
      </label>
      <button className='contact-button'>
        Contact us  
        <img className='arrow' src={arrow} /> 
      </button>
    </div>
    <div className='contact-info'>
      <div className='contact-holder'>
        <h1>
          Contact details
        </h1>
        <h2>
          info@oraclue.com <br/>
          +31 6 27 84 74 30
        </h2>
        <h3>
          <a href=""> Socials</a>
        </h3>
        <h4>
          <a href=""> Facebook </a>
        </h4>
        <h4>
          <a href=""> Instagram </a>
        </h4>
        <h4>
          <a href="https://www.linkedin.com/company/kingdomdoo/" target="_blank"> Linkedin </a>
        </h4>
      </div>
    </div>
  </div>
  <footer className='footer'>
      <div className='container brBot'>
        <div className='footerSoc'>
          <div className='leftPartPop'>
            <p>
              HQ:
            </p>
            <p>
              Dušana Baranina 15, Bijeljina, <br />
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
</>
  )
}

export default Contact