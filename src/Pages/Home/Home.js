import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import Slide from 'react-reveal/Slide'
import Spin from 'react-reveal/Spin'
import './Home.css'

// COMPONENTS 
import Footer from '../../Components/footer/Footer'

// IMAGES
import dash from '../../img/whiteDash.png'
import dashBlue from '../../img/Rectangle 178.svg'
import downDash from '../../img/arrow.png'
import leftDash from '../../img/Path 193.svg'
import rightDash from '../../img/Path 192.svg'
import graph from "../../img/Graph.svg"
import ui from '../../img/UI.svg'
import dev from '../../img/Dev.svg'
import out from '../../img/Out.svg'
import minus from '../../img/minus.svg'
import plus from '../../img/plus.png'
import adobe from "../../img/1.svg"
import angular from "../../img/2.svg"
import cPlus from "../../img/3.svg"
import cSharp from "../../img/4.svg"
import node from "../../img/5.svg"
import javascript from "../../img/6.svg"
import css from "../../img/7.svg"
import google from "../../img/8.svg"
import react from "../../img/9.svg"
import java from "../../img/10.svg"
import bigImg from '../../img/iznad futera.png'
import {FaAngleRight} from 'react-icons/fa'


const Home = () => {
    const [text, setText] = useState(true)
    const divRef = useRef();
    const topRef = useRef();
    const boxes = [
        {
            img:`${graph}`,
            title:"GRAPHIC DESIGN",
            text:"We will create a visual identity that will be noticed and remembered by everyone."   
        },
        {
            img:`${ui}`,
            title:"UI & UX DESIGN",
            text:"UX will allow user interaction with the app or site fast, easy and efficient.UI will make this interaction both aesthetically pleasing and efficient."   
        },
        {
            img:`${dev}`,
            title:"DEVELOPMENT",
            text:"Web application development services using industry leading technologies. Harness the power of modern web frameworks to build progressive web apps that scale."   
        },
        {
            img:`${out}`,
            title:"OUTSOURCING",
            text:"By outsourcing IT services, any organization can shift its focus towards its core competencies and obtain otherwise unavailable resources."  
        }
    ]

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
        setOpenText(tempData);
    }

  return (
    <div ref={topRef}>
    <div className='bg-image'>
        <Slide left>
        <h5>
            <img src={dash} />
            WEB DEVELOPMENT AGENCY
        </h5>
        <h1>
            Our goal is to move <br />
            our industry forward.
        </h1>
        
        <Link to="/about">
        <button className='homeBtn'>
            Find out more
            <FaAngleRight />
        </button>
        </Link>
        <button className='circleBtn' onClick={() => {
          divRef.current.scrollIntoView({ behavior: "smooth" });
        }}>
            <img src={downDash}  />
        </button>
        </Slide>
    </div>
    <div className='container flex pb100'>
        <div ref={divRef}>
        <div className='aboutTop'>
            <img src={dashBlue} />
            ABOUT US
        </div>
        <div className='aboutTitleNew'>
            Our mission <br />
            & vission
        </div>
        </div>
        <div className='flex'>
            <div>
           <div className='abtMission'>
            {text && "OUR MISSION"}
            {!text && "OUR VISION"}
           </div>
           <div className='cngText'>
            {text &&
             <div> 
                Effective work is our priority, and efficiency comes <br />
                with motivation, because we do what we love.         <br />
                We perform your requests quickly  and with high      <br />
                quality, respecting the pre-agreed deadlines.
            </div>
            }
            {!text &&
            <div> 
                We want to improve our knowledge in the future       <br />
                and to work on many more inspiring projects,         <br />
                We do not want mass production but a dedicated,      <br />
                professional approach  to every client.
            </div>
            }
            {text &&
            <div style={{paddingTop:"25px"}}> 
             <b>01</b>/02
            </div>
            }
            {!text &&
            <div style={{paddingTop:"25px"}}> 
             <b>02</b>/02
            </div>
            }
           </div>
           </div>
           <div className='textBtns'>
            <button onClick={() => setText(false)}>
                <img src={rightDash} />
            </button>
            <button onClick={() => setText(true)}>
            <img src={leftDash} />
            </button>
           </div>
        </div>
    </div>
    <div className='mountain'>
        <div className='container flex pt150'>
            <div className='leftPart'>
                <div>
                <div className='mountServices'>
                    <img src={dashBlue} />
                    SERVICES
                </div>
                <div className='mountTitle'>
                An effective 
                combination
                of skills and  
                personalities
                </div>
                </div>
                <div className='mt50'>
                <div className='mountExpertise'>
                We put our expertise and <br />
                passion at the service.
                </div>
                <Link to='/contact'>
                <button className='mountBtn'>
                    Check availability
                    <FaAngleRight />
                </button>
                </Link>
                </div>
            </div>
            <div className='rightPart'>
                {boxes.map((item, i) => (
                    <div className='boxHold' key={i}>
                        <Spin>
                        <div>
                            <img src={item.img} />
                        </div>
                        </Spin>
                        <div>
                            <p className='boxTitle'>{item.title}</p>
                            <p className='boxText'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
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
                    <div className='faqOpen' key={i} onClick={() => showText(i)} >
                    <div className='clsHold'>
                    <div className='faqSect'>
                        {text.title}
                    </div>
                    <div className='plsMin' >
                        <img src={text.isOpened ? `${minus}` : `${plus}`} />
                    </div>
                    </div>
                    {text.isOpened && 
                    <div className='faqText'>
                        {text.text} 
                    </div>
                    }
                    </div>
                ))}
            </div>
         </div>
    </div>
    <div className='cardsSections'>
        <div className='knowledgeSection container'>
          <div className='knowledgePointerHome'>
            <img src={dashBlue}/>
            KNOWLEDGE
          </div>
          <h1 className='knowledgeHeadingHome'>We use latest<br/> technologies</h1>
          <div className='imagesHome'>
            <div className='imageHolder' alt="pic">
              <img src={adobe}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={angular}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={cPlus}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={cSharp}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={node}/>
            </div> 
            <div className='imageHolder' alt="pic">
              <img src={javascript}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={css}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={google}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={react}/>
            </div>
            <div className='imageHolder' alt="pic">
              <img src={java}/>
            </div>
    </div>
    </div>
    </div>
    <div className='large-image' >
        <img src={bigImg} />
    </div>
    <Footer topRef={topRef} />
    </div>
  )
}

export default Home