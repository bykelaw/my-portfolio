import React from 'react';
import "./About.css";
import pic from "./../../assets/images/me.JPG"
import { faFighterJet, faTabletAlt, faLightbulb, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div className="About" id="ab">
      <h1 className="title">About</h1>
      <div className="top-sec">
        <div className="sub-sec">
          <div className="hexagon">
            < div className = "icon-pics" > <span > <FontAwesomeIcon icon={faFighterJet}></FontAwesomeIcon></span > </div>
          </div>
          <h4>Fast</h4>
          <p>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        <div className="sub-sec">
          <div className="hexagon">
            <div className="icon-pics"><span > <FontAwesomeIcon icon={faTabletAlt}></FontAwesomeIcon></span ></div>
          </div>
          <h4>Responsive</h4>
          <p>My layouts will work on any device, big or small.</p>
          </div>
        <div className="sub-sec">
          <div className="hexagon">
            <div className="icon-pics"><span><FontAwesomeIcon icon={faLightbulb}/></span></div>
          </div>
          <h4>Intuitive</h4>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
        <div className="sub-sec">
          <div className="hexagon">
            <div className="icon-pics"> <span > <FontAwesomeIcon icon={faSyncAlt}></FontAwesomeIcon></span > </div>
          </div>
          <h4>Dynamic</h4>
          <p>Websites don't have to be static, I love making pages come to life.</p>
          </div>
      </div>
    <div className="bottom-sec">
        <div className="left-sec">
          <div className="my-pics-container"><img src={pic} alt=""/></div>
          <h4>Who am I ? </h4>
<p>I'm a freelance Front-End Developer.I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
        </div>
        <div className="right-sec">

           <div className="progress-bar">
            <div>
              <div>CSS</div>
            </div>
          </div>
          <div className="progress-bar">
            <div>
              <div>HTML</div>
            </div>
          </div>
          <div className="progress-bar">
            <div>
              <div>JavaScript</div>
            </div>
          </div>
          
          <div className="progress-bar">
            <div>
              <div>React</div>
            </div>
          </div> 

{/*
<section class="container px-6 py-4 ">
  <div class="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Projects</p>
        <p class="text-sm font-normal text-gray-800">Unlimted projects for you</p>
      </div>
    </div>
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Developer API</p>
        <p class="text-sm font-normal text-gray-800">Well documented developer API</p>
      </div>
    </div>
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Template</p>
        <p class="text-sm font-normal text-gray-800">Templates and designs for your project</p>
      </div>
    </div>
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Analytics</p>
        <p class="text-sm font-normal text-gray-800">User and customer analytics</p>
      </div>
    </div>
  </div>
</section>
*/}
         
      </div>
    </div>
    </div>
  )
}
export default About;