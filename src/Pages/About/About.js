import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide'
import "./About.css";

// COMPONENTS 
import Footer from '../../Components/footer/Footer';
import Navigator from '../../Components/Navigator';

// IMAGES
import whiteDash from '../../img/whiteDash.png'
import dashBlue from '../../img/Rectangle 178.svg'
import card1 from "../../img/Group 3731.svg"
import card2 from "../../img/Group 3732.svg"
import card3 from "../../img/Group 3733.svg"
import logo3 from "../../img/logo3.svg"
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
import dotNet from "../../img/11.svg"
import docker from "../../img/12.svg"
import postgreSql from "../../img/13.svg"
import python from "../../img/14.svg"
import nest from "../../img/15.svg"
import webRtc from "../../img/16.svg"
import mongo from "../../img/17.svg"
import aws from "../../img/18.svg"
import wowza from "../../img/19.svg"
import sql from "../../img/20.svg"
import jenkins from "../../img/21.svg"
import vue from "../../img/22.svg"
import azzure from "../../img/23.svg"
import ffpmeg from "../../img/24.svg"
import express from "../../img/25.svg"
import blueDot from "../../img/blueDot.svg"
import quotes from "../../img/quotes.png"
import profileIcon from "../../img/profile-icon.png"
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'


const About = () => {
const [text, setText] = useState(true);
const [secondText, setSecondText] = useState(true);
const topRef = useRef();
const name = "About Us"

  return (
    <div ref={topRef}>
      
      <div className='header'>
      
        <div className='headerTextWrapper'>
        <Slide left>
          <h1 className='headerText'>Do what we love and <br/>work with passion</h1>
          <Navigator name={name}/>
          </Slide>
          </div>
      </div>
     
      <div className='aboutWrapper'>
        <div className='aboutSection'>
          <div className='aboutTitle'>
            <div className='aboutLineHolder'>
              <img src={dashBlue}/>
              <h4 className='blueText'>ABOUT US</h4>
              </div>
              <h1 className="missionText">Our mission <br/> &amp; vision</h1>
          </div>
          <div className='missionHolder'>
          <div className='misssionHeadTitle'>
            <h4>
              {text && "OUR MISSION" }
              {!text && "OUR VISION"}
            </h4>
          </div>
          {text && <p className='missionParagraph'>
               Effective work is our priority, and efficiency comes<br/>
                with motivation, because we do what we love. <br/>
                 We perform your requests quickly  and with high<br/>
               quality, respecting the pre-agreed deadlines.
              </p>}
          {!text && <p className='missionParagraph'>
              We want to improve our knowledge in the future<br/>
              and to work on many more inspiring projects, <br/>
              We do not want mass production but a dedicated,<br/>
               professional approach  to every client.
              </p>}
              <div className='missionPagination'>
               {text && <div><b>01</b> / 02</div> }
               {!text && <div>01/ <b>02</b></div> }
              </div>
          </div>
          <div className='missionArrowWrapper'>
          <div className='arrowLeft' onClick={()=>setText(false)}><FaAngleRight/></div>
          <div className='arrowRight'onClick={()=>setText(true)}><FaAngleLeft/></div>
          </div>  
        </div>
      </div>
      <div className='servicesWrapper '>
          <div className='services'>
            <div className='servicesHolder'>
              <img src={whiteDash}/>
              SERVICES
            </div>
            <h1 className='servicesHeading'>Since 2011, we have provided amazing <br/>
            solutions for enterprises of all sizes.</h1>
          </div>
          <div className='cards'>
            <div className='cardsHolder'>
              <img className='cardImage' src={card1}/>
                <div className='insideCardsHolder'>
                  <h1 className='cardsHeading'>15+</h1>
                  <p>YEARS OF EXPERIENCE</p>
               </div>
            </div>
           <div className='cardsHolder'>
              <img className='cardImage' src={card2}/>
                <div className='insideCardsHolder'>
                  <h1 className='cardsHeading'>250+</h1>
                  <p>SUCCESSFUL PROJECTS</p>
               </div>
            </div>
            <div className='cardsHolder'>
              <img className='cardImage' src={card3}/>
               <div className='insideCardsHolder'>
                  <h1 className='cardsHeading'>10+</h1>
                  <p>TEAM MEMBERS</p>
              </div>
            </div>
          </div>
          <div className="underCardsSection">
            <div className="secondLogo">
              <img className="largeLogo" src={logo3} />
            </div>
            <div className="underCardsHeadingWrapper">
              <h3 className="text underCardsHeading">
                We believe that our success is linked <br/> to the success of our
                clients.
              </h3>
              <span className="text underCardsSpan">
                We aim to establish a long-term business relationship. Most of
                our clients have been with us since its inception in 2011. Are
                goal is to provide a high level of support to every client.
              </span>
            </div>
          </div>
        </div>
        <div className='backgroundWhite'>
          <div className='knowledgeSection container'>
            <div className='ps90'>
            <div className='knowledgePointer  ps10'>
             <img src={dashBlue}/>
            KNOWLEDGE
            </div>
            <h1 className='knowledgeHeading   ps10'>We use latest<br/> technologies</h1>
            </div>
            <div className='images'>
              <div className='imageHolder'>
                <img src={adobe}/>
              </div>
              <div className='imageHolder'>
                <img src={angular}/>
              </div>
              <div className='imageHolder'>
                <img src={cPlus}/>
              </div>
            <div className='imageHolder'>
              <img src={cSharp}/>
            </div>
            <div className='imageHolder'>
              <img src={node}/>
            </div> 
            <div className='imageHolder'>
              <img src={javascript}/>
            </div>
            <div className='imageHolder'>
              <img src={css}/>
            </div>
            <div className='imageHolder'>
              <img src={google}/>
            </div>
            <div className='imageHolder'>
              <img src={react}/>
            </div>
            <div className='imageHolder'>
              <img src={java}/>
            </div>
            <div className='imageHolder'>
              <img src={dotNet}/>
            </div>
            <div className='imageHolder'>
              <img src={docker}/>
            </div>
            <div className='imageHolder'>
              <img src={postgreSql}/>
            </div>
            <div className='imageHolder'>
              <img src={python}/>
            </div>
            <div className='imageHolder'>
              <img src={nest}/>
            </div>
            <div className='imageHolder'>
              <img src={webRtc}/>
            </div>
            <div className='imageHolder'>
              <img src={mongo}/>
            </div>
            <div className='imageHolder'>
              <img src={aws}/>
            </div>
            <div className='imageHolder'>
              <img src={wowza}/>
            </div>
            <div className='imageHolder'>
              <img src={sql}/>
            </div>
            <div className='imageHolder'>
              <img src={jenkins}/>
            </div>
            <div className='imageHolder'>
              <img src={vue}/>
            </div>
            <div className='imageHolder'>
              <img src={azzure}/>
            </div>
            <div className='imageHolder'>
              <img src={ffpmeg}/>
            </div>
            <div className='imageHolder'>
              <img src={express}/>
            </div>
          </div>

          <div className='container'>
          <div className='knowledgePointer'>
             <img src={dashBlue}/>
            KNOWLEDGE
            </div>
            <h1 className='knowledgeHeading'>Explore available<br/> positions</h1>
            <Link to='/contact'>
            <div className='exploreTab'>
              <div className='underExploreTab'>
                <img className='blueDot' src={blueDot}/>
                <div className='spanFlex'><span className='exploreText secondPr'>JUNIOR FRONTEND ENGINEER</span></div>
              
              </div>
              <div className='applyNow'>
                <span className='applySpan'>Apply now</span>
                <FaAngleRight className="faRight"/>
              </div>
            </div>
            </Link>
            <Link to='/contact'>
            <div className='exploreTab'>
              <div className='underExploreTab'>
                <img className='blueDot' src={blueDot}/>
                <div className='spanFlex'><span className='exploreText'>EXPERIENCED FRONTEND ENGINEER</span></div>
              
              </div>
              <div className='applyNow'>
                <span className='applySpan'>Apply now</span>
                <FaAngleRight className="faRight"/>
              </div>
            </div>
            </Link>
            <Link to='/contact'>
            <div className='exploreTab'>
              <div className='underExploreTab'>
                <img className='blueDot' src={blueDot}/>
                <div className='spanFlex'> <span className='exploreText pr'>JUNIOR JAVA ENGINEER</span></div>
              </div>
              <div className='applyNow'>
                <span className='applySpan'>Apply now</span>
                <FaAngleRight className="faRight"/>
              </div>
            </div>
            </Link>
            <Link to='/contact'>
            <div className='exploreTab'>
              <div className='underExploreTab'>
                <img className='blueDot' src={blueDot}/>
                <div><span className='exploreText'>EXPERIENCED FRONTEND ENGINEER</span></div>
              </div>
              <div className='applyNow'>
                <span className='applySpan'>Apply now</span>
                <FaAngleRight className="faRight"/>
              </div>
            </div>
            </Link>
         </div>
         </div>
         </div>
      <div>
        <div className='quatermarkWrapper'>
              <div className='quatermarkHolder'>
             <div>
            <img className='qoutes' src={quotes}/>
          </div>
          <div className='infoQuotes'> 
          <div>
            <div className='blueHeading'>WHAT OUR CLIENTS SAY ABOUT US.</div>
          </div>
          {secondText && <div className='loremText'>"Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                elit sed do eiusmod tempor incididunt ut labore<br/>
                dol zut enim ad minim veniam."</div>}
          {!secondText && <div className='loremText'>"Duis aute irure dolor in reprehenderit in voluptate<br/>
                velit esse cillum dolore eu fugiat nulla pariatur..<br/>
                 Excepteur occaecat cupidatat"</div>}
          <div className='userInfoWrapper'> 
          <div className='userInfoHolder'> 
            <img src={profileIcon}/>
            <div className='userInfo'>
             {secondText && <h5 className='userName'>Nikola Stojanovic</h5>}
             {!secondText && <h5 className="userName">Jovan Trifkovic</h5>}  
              <span className='userJob'>MARKETING - LEAD</span>
            </div>
            </div>
            <div>
            <div className='missionArrowWrapper'>
          <div className='arrowLeft' onClick={()=>setSecondText(false)}><FaAngleRight/></div>
          <div className='arrowRight'onClick={()=>setSecondText(true)}><FaAngleLeft/></div>
          </div> 
            </div>
          </div>   
         </div>
          </div>
        </div>
        <div className='blue'></div>     
        </div>
        <Footer  topRef={topRef}/>
       

    
    </div>
  )
}

export default About