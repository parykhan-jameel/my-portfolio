import React from 'react'

export default function About() {
    return (
        <section id="about" className='text-gray-400 bg-gray-900 body-font'>
         <div className='container  px-5 py-10 mx-auto text-center lg:px-40'>
          <div className='flex flex-col w-full mb-20'>
           <h1 data-aos="fade-up" className='sm:text-4xl text-3xl font-medium title-font  text-[#ccd6f6] mb-4 '>About Me</h1>
           <p data-aos="fade-right"  className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#8892b0] mb-5">
           Hi there! 👋 I'm Parykhan, a passionate frontend developer with a love for crafting engaging and intuitive user experiences.
            I've been on this exciting journey for over a year,
            and I can't get enough of it! 
            <br/>
            My core skills revolve around HTML, CSS, and JavaScript, 
            and I have extensive experience working with popular frontend framework like React.js.
             I believe in writing clean, 
            efficient, and maintainable code to build scalable web applications that make a positive impact on users' lives.
            <br/>
            When I'm not coding, you'll probably find me exploring new web development trends, attending tech meetups,
             or indulging in my other passion which is drawing!
             <br/>
             I'm thrilled to be a part of this ever-evolving industry, and I'm always eager to take on new challenges.
              Feel free to browse through my portfolio
           </p>
           <h3 className='sm:text-xl text-lg font-medium title-font  text-[#ccd6f6] mb-4'>Looking forward to connecting with fellow developers and enthusiasts alike! 🌟</h3>
        
           <div className='flex flex-col items-center justify-center'>
           <a href='https://www.canva.com/design/DAFP9c-c_D8/CcHbT3dAwY7KBmvWdTKz1g/view?utm_content=DAFP9c-c_D8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank' rel="noopener noreferrer">
            <button  data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='inline-flex  text-[#A5FFC9] bg-gray-900 border border-[#A5FFC9]  py-2 px-6 focus:outline-none  hover:bg-[#A5FFC9] hover:text-gray-900    hover:scale-110 ease-in-out duration-700 rounded text-lg'>View My Resume</button>
            </a>
           </div>
          </div>
         </div>

         
        </section>
    )

}
