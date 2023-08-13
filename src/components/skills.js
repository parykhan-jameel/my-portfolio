import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"
import React from "react";


export default function Skills() {

    const skillsData = [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Tailwind'},
      { name: 'BootStrap'},
      { name: 'Git & GitHub'},
      { name: 'npm'}  
    ];
    return (
        <section id="skills">
          <div className="container  px-5 py-10 mx-auto">
            <div className="text-center mb-20">
             <FontAwesomeIcon icon={faMicrochip}  className="fa-2xl hover:fa-bounce" style={{color:"#A5FFC9"}} />
              <br/>
              <h1 data-aos="fade-up" className="sm:text-4xl text-3xl font-medium title-font text-[#ccd6f6] mb-4">
                Skills &amp; Technologies
              </h1>
              <p data-aos="fade-right" className="text-base text-[#8892b0] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Here are a few technologies I've been working with recently 
              </p>
            </div>
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
            {skillsData.map((skill, index) => (
              <div key={index} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center group/item hover:bg-gray-700 hover:scale-110 duration-700 ease-in-out ">
                <FontAwesomeIcon icon={faCheckCircle} style={{color:"#A5FFC9"}} />
                   {" "}
                  <span className="title-font font-medium text-white ml-3">
                  
                  {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      );


}