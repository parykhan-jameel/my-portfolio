import React, { useEffect, useState } from "react";
import {Link} from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";


export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

 
  useEffect(()=>{
    window.addEventListener("scroll", ()=> {
      //const nav = document.querySelector('nav');
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    })
  })
    return (
        <nav className={`fixed w-full left-0 top-0 z-50 ${ sticky? "md:bg-[#ccd6f6]/60 text-gray-900" : "text-[#ccd6f6]"}`}>
          <div className="  flex items-center justify-between "> 
            <div className="mx-7">
              <h4 className="text-4xl uppercase font-bold ">
                 <span className="text-[ccd6f6]">Pary</span><span className="text-[#A5FFC9]">khan</span>
              </h4>
            </div>
             <div className={`${sticky ? "md:bg-[#ccd6f6]/0 bg-[#ccd6f6]":"bg-[#ccd6f6]"}text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
              <ul className="flex items-center gap-1 py-2 text-lg" >
              <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer" >
                Home
                 </Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
                About
                 </Link>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
                 Projects
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={-150} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
                Skills
                 </Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
                 Contact
                </Link>
             
              </ul>
             </div>
             <div onClick={() =>setOpen(!open)}
             className={`z-[10] cursor-pointer pr-4 ${open ? "text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`}>
               <FontAwesomeIcon icon={faBars} />
             </div>
             <div className= {`md:hidden text-gray-900 absolute top-0 w-72 font-medium px-7 py-2 h-screen bg-[#ccd6f6] bg-opacity-75  rounded-md overflow-hidden   duration-300  ${open ? "right-0" : "right-[-100%]"}`}>
              <ul className=" flex flex-col items-center justify-center h-full gap-10 p-3 text-lg">
              <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
                Home
                 </Link>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
              About
               </Link>
              <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
               Projects
              </Link>
              <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="px-6 hover:text-[#A5FFC9]">
              Skills
               </Link>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="px-6 hover:text-[#A5FFC9] active:text-[#A5FFC9] cursor-pointer">
               Contact
              </Link>
              </ul>
             </div>
          </div>
        </nav>
    );

}