import { useState, useRef, useEffect } from 'react'
import Slide from 'react-reveal/Slide'
import Spin from 'react-reveal/Spin'
import "./Services.css"

// COMPONENTS
import Footer from '../../Components/footer/Footer'
import Navigator from '../../Components/Navigator'

// IMAGES
import graph from '../../img/Graph.svg'
import ui from '../../img/UI.svg'
import dev from '../../img/Dev.svg'
import dev1 from '../../img/Mask Group 22.png'
import slike from '../../img/slike.png'
import marketing from '../../img/Digital.svg'
import minus from '../../img/minus.svg'
import plus from '../../img/plus.png'
import dashBlue from '../../img/Rectangle 178.svg'



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
            text:`This completely depends on what you need. It takes longer to build
            a 1000 page megasite than a smaller eight page brochure website.
            .`,
            isOpened: false
        },
        {
            title:"WHAT SIZE COMPANIES DO YOU PRODUCE WEB DESIGNS FOR?",
            text:`We like to work with all sorts and sizes of businesses and individuals, and we bring the same skills used to support our celebrity and big business clients to the work we do for smaller clients. We’re just as keen to work with small businesses as we are large ones, and as a local firm we’re ideally placed to understand the needs of growing organisations.
            `,
            isOpened: false
        },
        {
            title:"DO YOU REDISIGN EXISTING WEBSITES?",
            text:`We certainly can do! It’s important to approach website redesignssensitively to make sure your reasons for redesigning are valid. This will ensure the project is an overall success from your ROI point of view.`,
            isOpened: false
        },
        {
            title:"DO YOU WORK INTERNATIONALLY?",
            text:`Of course! With the advent of online conference tools such as Zoom, appear.in, and of course Skype, just to name a few, it makes working with businesses anywhere in the world straight forward enough.
            `,
            isOpened: false
        },
        {
            title:"WILL MY WEBSITE WORK ON SMART PHONE AND TABLET?",
            text:`It most certainly will! More people are accessing the web via small screens than ever, and the trend is likely to carry on. If your site doesn’t display or work properly on a mobile or tablet screen, you risk losing a big chunk of your potential audience. It means mobile responsive web design is essential these days. Every website we create is mobile responsive.`,
            isOpened: false
        },
        {
            title:"CAN U HELP ME RANK HIGH IN GOOGLE?",
            text:`A page one position in the Google search results is like gold dust. Not so long ago it was relatively easy to achieve. These days it’s a lot more challenging, and getting it wrong can affect your reputation. Thankfully we have all the SEO tools and know-how to maximise your chances and some happy customers to vouch for us.`,
            isOpened: false
        }
    ])
    
    const showText = (ind) => {
        let tempData = [...openText];
        tempData[ind]["isOpened"] = !tempData[ind]["isOpened"];
        setOpenText(tempData)

    }  
    const name = "Services"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  return (
    <>
 <div className='header1'  ref={topRef}>
        <div className='headerTextWrapper1'>
        <Slide left>
          <h1 className='headerText1' >Our goal is to move <br/>
our industry forward.</h1>
     <Navigator name={name}/>
     </Slide>
        </div>
      </div>

    
    <div className='main-background'>
       <div className='main-content1'>
       <div className='faqStart'>
              <img src={dashBlue} />
                    SKILLS
             </div>
            
  <h1 className='main-content-heading'>An effective combination <br/> of skills and personalities</h1>
  <h2 className='main-content-heading2'>
  We put our expertise and <br/>
passion at the service.
  </h2>
   </div>
   <div className='card-wrapper'>
   <div className='card'>
    <Spin>
    <img className="card-image"src={graph} alt="graph"/>
    </Spin>
    <div className='card-heading'>
    <h1>GRAPHIC DESIGN</h1>
    <p>We will create a visual identity that will be noticed and remembered by everyone.
</p>
    </div>
   </div>
   <div className='card'>
    <Spin>
    <img className="card-image"src={ui} alt="graph"/>
    </Spin>
    <div className='card-heading'>
    <h1>UI & UX DESIGN</h1>
    <p>UX will allow user interaction with the app or site fast, easy and efficient.UI will make this interaction both aesthetically pleasing and efficient.
</p>
    </div>
   </div>
   <div className='card'>
    <Spin>
    <img className="card-image"src={dev} alt="graph"/>
    </Spin>
    <div className='card-heading'>
    <h1>DEVELOPMENT</h1>
    <p>Web application development services using industry leading technologies. Harness the power of modern web frameworks to build progressive web apps that scale.
</p>
    </div>
   </div>
   <div className='card'>
    <Spin>
    <img className="card-image"src={graph} alt="graph"/>
    </Spin>
    <div className='card-heading'>
    <h1>OUTSOURCING</h1>
    <p>By outsourcing IT services, any organization can shift its focus towards its core competencies and obtain otherwise unavailable resources.

</p>
    </div>
   </div>
   <div className='card'>
    <Spin>
    <img className="card-image"src={marketing} alt="graph"/>
    </Spin>
    <div className='card-heading'>
    <h1>DIGITAL MARKETING</h1>
    <p>We will create a visual identity that will be noticed and remembered by everyone.
</p>
    </div>
   </div>
   <div className='card'>
    <Spin>
    <img className="card-image"src={ui} alt="graph"/>
    </Spin>
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
    <div className='faqStart'>
              <img src={dashBlue} />
                    TECHOLOGIES
             </div>
  <h1 className='main-content-heading1'>Responsive <br/> Technology</h1>
   </div>
   <div className='padding'>
    <Spin>
   <img className="card-image1"src={dev1} alt="graph"/>
   </Spin>
  <p> Bootstrap, the world’s most popular framework <br className='none'/>
for building responsive, mobile-first sites </p>
   </div>
   </div>
  <img className='big-image1' src={slike} alt=""/>
 <div className='bottom-background'>
    <div className='content-wrapper'>
    <h1>What our clients say about us.</h1>
    <h2>“We spend a lot time designing the
bridge, but not enough time thinking
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
                    <div className='faqOpen' key={i}  onClick={() => showText(i)}>
                    <div className='clsHold'>
                    <div className='faqSect'>
                        {text.title}
                    </div>
                    <div className='plsMin' >
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