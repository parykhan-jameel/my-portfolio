import React from 'react'

export default function About() {
    return (
        <section id="about" className='text-gray-400 bg-gray-900 body-font'>
         <div className='container  px-5 py-10 mx-auto text-center lg:px-40'>
          <div className='flex flex-col w-full mb-20'>
           <h1 data-aos="fade-up" className='sm:text-4xl text-2xl font-medium title-font  text-[#ccd6f6] mb-4 '>About Me
           <span  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-0.5rem] h-0.5 bg-[#8892b0]"
            style={{ width: "25%" }}>

            </span>
           </h1>
           <p data-aos="fade-right"  className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#8892b0] mb-5">
           Hi there! 👋 I'm Parykhan, a passionate frontend developer with a love for crafting engaging and intuitive user experiences.
            
            <br/>
          
           </p>
          
        
           <div className='flex flex-col items-center justify-center'>
           <a href="https://www.canva.com/design/DAFP9c-c_D8/CcHbT3dAwY7KBmvWdTKz1g/view?utm_content=DAFP9c-c_D8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank' rel="noopener noreferrer">
            <button  data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='inline-flex  text-[#A5FFC9] bg-gray-900 border border-[#A5FFC9]  py-2 px-6 focus:outline-none  hover:bg-[#A5FFC9] hover:text-gray-900    hover:scale-110 ease-in-out duration-700 rounded text-lg'>View My Resume</button>
            </a>
           </div>
          </div>
         </div>

         
        </section>
    )

}
