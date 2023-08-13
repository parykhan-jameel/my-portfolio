import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons"
import React from "react";
//import { projects } from "../data";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import jobie from "../images/jobie.png"
import todo from "../images/todo.png"
//import {Swiper, SwiperSlide} from "swiper/react";

//import "swiper/css";
//import "swiper/css/pagination";
//import "swiper/css/navigation";
//import {Pagination, Autoplay} from "swiper" 

export default function Projects() {
   useEffect(() => {
    Aos.init({duration: 2000});
   },[])
   const projects = [
       {
        id:1,
        src:jobie,
        demo:"https://capstonejobie.vercel.app/",
        github_code:"https://github.com/ReCoded-Org/-capstone-IQLBPS-jobie"

       },
       {
        id:2,
        src:todo,
        demo:"https://todollist-app.netlify.app/",
        github_code:"https://github.com/parykhan-/mnt/c/Users/CTC/my-portfolio/my-portfolio/src/imagesjameel/todo-list"
       }
   ]
    return (
        <section id="projects" className=" text-gray-400 bg-gray-900 body-font">
        <div className="container  px-5 py-10 mx-auto text-center lg:px-40 mb-16">
        
        <div  className="flex flex-col  w-full mb-20" >
        <FontAwesomeIcon icon={faLaptopCode}  className="fa-2xl" style={{color:"#A5FFC9"}}  />
            <h1 data-aos="fade-up" className=" sm:text-4xl text-3xl font-medium title-font  text-[#ccd6f6] mb-4" >
            Things I've Built 
            </h1>
          <p data-aos="fade-right" className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#8892b0]">
            Through web development, HTML, CSS and JavaScript I've build cool and responsive websites, take a look at my works. 
          </p>
        </div>
        <div  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex flex-col max-w-5xl mx-auto lg:w-4/5 lg:flex-row sm:mx-auto sm:mb-2   gap-8 items-center  rounded-lg group">
        {
          projects.map(({id,src,demo,github_code})=>(
            
         
            <div key={id} className="shadow-md shadow-[#8892b0] rounded-lg relative mb-2 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 ">
            <img src={src} alt="gallery" className="rounded-md"/>
            <div className="flex items-center justify-center">
             <a href={demo} className=" text-[#6780cd]  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  " target='_blank' rel="noopener noreferrer">Demo</a>
             <a href={github_code} className=" text-[#6780cd] w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  " target='_blank' rel="noopener noreferrer">View Code</a>
            </div>
            </div>
           
          
          
          ))
        }
        </div>
        
        
      </div>
    </section>
    );
}