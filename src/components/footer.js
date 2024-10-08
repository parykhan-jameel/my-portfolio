import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCode, faEnvelope} from '@fortawesome/free-solid-svg-icons'
//import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos';
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
    return (
        <footer className="bg-gray-900 text-white p-8 ">
        <div className="flex items-center justify-center space-x-4 ">
       <div  className='flex gap-4 flex-row justify-center items-center'>
       <div  className='text-[#8892b0] hover:text-[#A5FFC9] hover:cursor-pointer hover:ease-in-out duration-300 '>
        <a href='https://github.com/parykhan-jameel' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='fa-xl'/>
          </a>
       </div>
       <div  className='text-[#8892b0] hover:text-[#A5FFC9] hover:cursor-pointer hover:ease-in-out duration-300'>
        <a href='https://linkedin.com/in/parykhan-jameel' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className='fa-xl'/>
        </a> 
       </div>
       <div  className='text-[#8892b0] hover:text-[#A5FFC9] hover:cursor-pointer hover:ease-in-out duration-300'>
       <a href='mailto:parexan.00443431@gmail.com' target='_blank' rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div  className='text-[#8892b0] hover:text-[#A5FFC9] hover:cursor-pointer hover:ease-in-out duration-300'>
       <a href='https://www.frontendmentor.io/profile/parykhan-jameel' target='_blank' rel="noopener noreferrer">
         <FontAwesomeIcon icon={faCode} className='fa-xl'/>
       </a> 
      </div>
      
       </div> 
      </div>
      
      </footer>
    );
}