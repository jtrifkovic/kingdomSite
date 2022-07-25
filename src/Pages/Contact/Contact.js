import React from 'react'
import { useRef } from 'react'
import Navigator from '../../Components/Navigator'
import Slide from 'react-reveal/Slide'
import "./Contact.css";
import dashBlue from '../../img/Rectangle 178.svg'
const Contact = () => {
  const divRef = useRef();
  const topRef = useRef();
  const name = "Contact"; 
  return (
    <>
  <div className='header2'  ref={topRef}>
        <div className='headerTextWrapper1'>
        <Slide left>
          <h1 className='headerText1' >Our goal is to move <br/>
our industry forward.</h1>
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
<div className='input-holder'>
  <label className='contact-label'>
 <span className='input-number'>01</span>What's your name? <br/>
  <input type="text" className='contact-input' placeholder='John Doe*'/>
</label>
<label className='contact-label'>
<span className='input-number'>02</span>What's your email? <br/>
  <input type="text"  className='contact-input' placeholder='john@doe.com'/>
</label>
<label className='contact-label'>
<span className='input-number'>03</span>What's the name of your organization? <br/>
  <input type="text" className='contact-input' placeholder='Your Company Name &reg;'/>
</label>
<label className='contact-label'>
<span className='input-number'>04</span>What services are you looking for?<br/>
  <input type="text"  className='contact-input' placeholder='Web Design, Web Development ...'/>
</label>
<label>
<span className='input-number'>05</span>Your message <br/>
  <input type="text"  className='contact-input' placeholder='Hello, can you help me with...'/>
</label>
</div>
</>
  )
}

export default Contact