import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {

  const skillsData = [
    {
      name: 'HTML',
      url: 'https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      name: 'CSS',
      url: 'https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      name: 'JavaScript',
      url: 'https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'React',
      url: 'https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      link: 'https://reactjs.org/'
    },
    {
      name: 'Tailwind',
      url: 'https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      link: 'https://tailwindcss.com/'
    },
    {
      name: 'Bootstrap',
      url: 'https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
      link: 'https://getbootstrap.com/'
    },
    {
      name: 'Git & GitHub',
      url: 'https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
      link: 'https://github.com/'
    },
    {
      name: 'npm',
      url: 'https://img.shields.io/badge/npm-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white',
      link: 'https://www.npmjs.com/'
    }
  ];
  

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <FontAwesomeIcon icon={faMicrochip} className="fa-2xl hover:fa-bounce" style={{ color: "#A5FFC9" }} />
          <br />
          <h1 data-aos="fade-up" className="sm:text-4xl text-2xl font-medium title-font text-[#ccd6f6] mb-4">
            Skills &amp; Technologies
            <span  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-0.5rem] h-0.5 bg-[#8892b0]"
            style={{ width: "25%" }}>

            </span>
          </h1>
          <p data-aos="fade-right" className="text-base text-[#8892b0] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-4">
            Here are a few technologies I've been working with recently
          </p>
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="flex flex-wrap lg:w-1/3 sm:mx-auto sm:mb-2 -mx-2 ">
          {skillsData.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="flex justify-center items-center gap-1">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.url} alt={`${skill.name} badge`} className="h-8" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
