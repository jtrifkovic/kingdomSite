import React from 'react'
import "./Services.css"
import { useState } from 'react'
import dash from '../../img/Rectangle 178.png'
import graph from '../../img/graph.png'
import ui from '../../img/uiux-design.png'
import dev from '../../img/Mask Group 23.png'
import slike from '../../img/slike.png'
import marketing from '../../img/marketing.png'
import {FaAngleRight} from 'react-icons/fa'
import bottomPicture from '../../img/Group 3754.png'
import minus from '../../img/minus.svg'
import plus from '../../img/plus.png'
import dashBlue from '../../img/Rectangle 178.svg'
import bigImg from '../../img/iznad futera.png'
import Footer from '../../Components/footer/Footer'
import { useRef } from 'react'
const Services = () => {
    const divRef = useRef();
    const topRef = useRef();
    const [openText, setOpenText] =useState([
        {
            title:"WHY KINGDOM?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: true
        },
        {
            title:"HOW LONG DOES IT TAKE TO BUILD A WEBSITE?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: false
        },
        {
            title:"WHAT SIZE COMPANIES DO YOU PRODUCE WEB DESIGNS FOR?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: false
        },
        {
            title:"DO YOU REDISIGN EXISTING WEBSITES?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: false
        },
        {
            title:"DO YOU WORK INTERNATIONALLY?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: false
        },
        {
            title:"WILL MY WEBSITE WORK ON SMART PHONE AND TABLET?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: false
        },
        {
            title:"CAN U HELP ME RANK HIGH IN GOOGLE?",
            text:`Since 2011, we have provided amazing solutions for enterprises of all sizes. We believe that our success is linked to the success of our clients. We aim to establish a long-term business relationship.`,
            isOpened: false
        }
    ])
    
    const showText = (ind) => {
        let tempData = [...openText];
        tempData[ind]["isOpened"] = !tempData[ind]["isOpened"];
        setOpenText(tempData)
    
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  return (
    <>
    <div className='background-image' ref={topRef}>

<h1 className='heading'>Our goal is to move <br/> our industry forward </h1>

<div className='transparent'>
    <h1>Home</h1>
    <h1><FaAngleRight /></h1>
    <h1>Services</h1>
</div>
    </div>
    <div className='main-background'>
       <div className='main-content'>
   <img className='dash' src={dash} alt="dash"/>
  <span className='skills'>SKILLS</span>
  <h1 className='main-content-heading'>An effective combination of skills and personalities</h1>
  <h2 className='main-content-heading2'>
  We put our expertise and <br/>
passion at the service.
  </h2>
   </div>
   <div className='card-wrapper'>
   <div className='card'>
    <img className="card-image"src={graph} alt="graph"/>
    <div className='card-heading'>
    <h1>GRAPHC DESIGN</h1>
    <p>We will create a visual identity that will be noticed and remembered by everyone.
</p>
    </div>
   </div>
   <div className='card'>
    <img className="card-image"src={ui} alt="graph"/>
    <div className='card-heading'>
    <h1>UI & UX DESIGN</h1>
    <p>UX will allow user interaction with the app or site fast, easy and efficient.UI will make this interaction both aesthetically pleasing and efficient.
</p>
    </div>
   </div>
   <div className='card'>
    <img className="card-image"src={dev} alt="graph"/>
    <div className='card-heading'>
    <h1>UI & UX DESIGN</h1>
    <p>UX will allow user interaction with the app or site fast, easy and efficient.UI will make this interaction both aesthetically pleasing and efficient.
</p>
    </div>
   </div>
   <div className='card'>
    <img className="card-image"src={graph} alt="graph"/>
    <div className='card-heading'>
    <h1>OUTSOURCING</h1>
    <p>By outsourcing IT services, any organization can shift its focus towards its core competencies and obtain otherwise unavailable resources.
</p>
    </div>
   </div>
   <div className='card'>
    <img className="card-image"src={marketing} alt="graph"/>
    <div className='card-heading'>
    <h1>DIGITAL MARKETING</h1>
    <p>We will create a visual identity that will be noticed and remembered by everyone.
</p>
    </div>
   </div>
   <div className='card'>
    <img className="card-image"src={ui} alt="graph"/>
    <div className='card-heading'>
    <h1>MAINTANCE</h1>
    <p>UX will allow user interaction with the app or site fast, easy and efficient.UI will make this interaction both aesthetically pleasing and efficient.
</p>
    </div>
   </div>
   </div>
    </div>
    <div className='middle-content'>
    <div className='main-content'>
   <img className='dash' src={dash} alt="dash"/>
  <span className='skills'>SKILLS</span>
  <h1 className='main-content-heading1'>Responsive Technology</h1>
   </div>
   <div className='padding'>
   <img className="card-image"src={dev} alt="graph"/>
  <p> Bootstrap, the world’s most popular framework <br/>
for building responsive, mobile-first sites </p>
   </div>
   </div>
  <img className='big-image1' src={slike} alt=""/>
 <div className='bottom-background'>
    <div className='content-wrapper'>
    <h1>What our clients say about us.</h1>
    <h2>“We spend a lot time designing the
bridge,but not enough time thinking
about the people who are crossing it.”</h2>
    <h3>Dr. Prabhjot Singh</h3>
    </div>
    </div>
    <div className='faq-holder'>
        <div className='container'>
             <div className='faqStart'>
              <img src={dashBlue} />
                    FAQ
             </div>
            <div className='faqTitle'>
                Web development FAQ's
            </div>
            <div className='faqOpen-holder'>
                {openText.map((text, i) => (
                    <div className='faqOpen' key={i}>
                    <div className='clsHold'>
                    <div className='faqSect'>
                        {text.title}
                    </div>
                    <div className='plsMin' onClick={() => showText(i)} >
                        <img src={text.isOpened ? `${minus}` : `${plus}`} />
                    </div>
                    </div>
                    {text.isOpened && <div className='faqText'>{text.text} </div>}
                    </div>
                ))}
            </div>
         </div>
    </div>
   
    <Footer divRef={divRef} topRef={topRef} />
    </>
  )
}

export default Services