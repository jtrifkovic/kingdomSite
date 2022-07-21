import React from 'react'
import "./About.css";
import dash from '../../img/Rectangle 178.png'
import dashBlue from '../../img/Rectangle 178.svg'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'
import card1 from "../../img/Group 3731.png"
import card2 from "../../img/Group 3732.png"
import card3 from "../../img/Group 3733.png"
import logo3 from "../../img/logo3.svg"
import adobe from "../../img/adobe.png"
import angular from "../../img/angular.png"
import cPlus from "../../img/cPlus.png"
import cSharp from "../../img/c-sharp.png"
import node from "../../img/node-js.png"
import javascript from "../../img/javascript.png"
import css from "../../img/css.png"
import google from "../../img/google.png"
import react from "../../img/react.png"
import java from "../../img/java.png"
import dotNet from "../../img/dot-net.png"
import docker from "../../img/docker-logo.png"
import postgreSql from "../../img/postgresql-logo.png"
import python from "../../img/python-logo.png"
import nest from "../../img/nest-logo.png"
import webRtc from "../../img/web-rtc-logo.png"
import mongo from "../../img/mongo-db-logo.png"
import aws from "../../img/aws-logo.png"
import wowza from "../../img/wowza-logo.png"
import sql from "../../img/sql-server-logo.png"
import jenkins from "../../img/jenkins-logo.png"
import vue from "../../img/vue-logo.png"
import azzure from "../../img/azzure-logo.png"
import ffpmeg from "../../img/ffpmeg-logo.png"
import express from "../../img/express-logo.png"

import { useState } from 'react';


const About = () => {
const [text, setText] = useState(true);



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
              <h1 className="missionText">Our mission <br/> &amp; vission</h1>
          </div>
          <div className='missionHolder'>
          <div className='misssionHeadTitle'>
            <h4>OUR MISSION</h4>
          </div>
          {text && <p className='missionParagraph'>We want to improve our knowledge in the future <br/>
              and to work on many more inspiring projects,<br/> 
              We do not want mass production but a dedicated,<br/>
              professional approach  to every client.</p>}
          {!text && <p className='missionParagraph'>Lorem Ipsum is simply dummy text of the future <br/>
              Lorem Ipsum has been the industry's <br/>
              There are many variations of passages of<br/>
              Lorem Ipsum available, but the majority</p>}
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
      <div className='servicesWrapper'>
          <div className='services'>
            <div className='servicesHolder'>
              <img src={dash}/>
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
        <div className='knowledgeSection'>
          <div className='knowledgePointer'>
            <img src={dashBlue}/>
            KNOWLEDGE
          </div>
          <h1 className='knowledgeHeading'>We use latest<br/> technologies</h1>
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
        </div>
        </div>
        

    
    </div>
  )
}

export default About