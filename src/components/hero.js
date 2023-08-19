import React from "react";
import {Link} from "react-scroll"
//import {ReactComponent as Illustration} from "../images/hero.svg";

export default function Hero() {
    return (
        <section id = "hero">
        <div className="container  mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl my-8 font-medium text-[#ccd6f6]">
            Hi, I'm Parykhan.
          
            <br/>
            <h1 className=" lg:inline-block text-gray-500 dark:text-[#8892b0] mt-4">I'm a Frontend Developer
            </h1>
            </h1>
          
            <div className="flex justify-center">
              <Link
              to="contact" spy={true} smooth={true} offset={50} duration={500}
              className="  inline-flex  text-[#A5FFC9] bg-gray-900 border border-[#A5FFC9]  py-2 px-6 focus:outline-none   hover:bg-[#A5FFC9] hover:text-gray-900   hover:scale-110 duration-700 ease-in-out rounded text-lg cursor-pointer">
              Contact Me 
              </Link>
              <Link
              to="projects" spy={true} smooth={true} offset={-100} duration={500}
              className=" ml-4 inline-flex text-[#A5FFC9] bg-gray-900 border border-[#A5FFC9] py-2 px-6 focus:outline-none  hover:bg-[#A5FFC9] hover:text-gray-900  hover:scale-110 duration-700 ease-in-out rounded text-lg cursor-pointer">
               Projects
              </Link>
            </div>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-700 rounded-full w-80 h-80 overflow-hidden mr-5  sm:mx-auto  ">
             <img className="object-cover object-center"
               layout="fill" object ="cover"
               alt="hero"
               src={require("../images/perryrmbg.png")}
             />
          </div>
       </div>
      </section>

    );
}