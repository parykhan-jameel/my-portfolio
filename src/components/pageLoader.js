import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons"
export default function PageLoader() {
  return (
    <div className='h-screen w-full bg-gray-900 text-[#ccd6f6] fixed bottom-0 left-0 right-0 z-[55] flex justify-center items-center overflow-hidden '>
      <div className='flex items-center justify-between h-[60px] w-[280] text-xl font-extrabold overflow-hidden text-[#ccd6f6] '> 
        <FontAwesomeIcon icon={faSpinner} spin size='2xl'/>
      

      </div>
    </div>
  )
}
