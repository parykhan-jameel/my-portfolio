import React from "react";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';


export default function Bot() {
  
  
    return (
        <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-[#ccd6f6] text-4xl bg-[#A5FFC9] w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
        <Tooltip title="Email me" position="top" className="tooltip text-gray-900 tooltip-gray">
        <a href='mailto:parexan.00443431@gmail.com' target='_blank' rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
        </Tooltip> 
          
        </div>
    );

}