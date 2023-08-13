import React, { useEffect, useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faGithub, faLinkedinIn,faTwitter, faCodepen} from '@fortawesome/free-brands-svg-icons';
//import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
//import 'bootstrap-icons/font/bootstrap-icons.css';
import Aos from 'aos';
import "aos/dist/aos.css";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email';
    }
    if (!formData.message) {
      errors.message = 'Please enter your message';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setFormErrors({});

    // TODO: Send form data to server or perform other actions
    console.log(formData);
   
  };
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
  <section id="contact"  className="text-gray-400 py-10 px-5 bg-gray-900 body-font">
    <div className="container  flex justify-center  mx-auto  text-center lg:px-40">
      <div className="w-1/3 p-8">
        <h2 data-aos= "fade-up" className="sm:text-4xl text-3xl font-medium title-font my-8 text-[#ccd6f6]">Get in touch</h2>
        <p data-aos="fade-right" className='lg:w-2/3 xl:w-2/4  mx-auto  leading-relaxed text-md text-[#8892b0] mb-4 '> let's connect! </p>
      <div className='mt-5 max-w-5xl'>
        <form data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium text-[#8892b0]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full bg-gray-800 border p-2 rounded ${
                formErrors.name ? 'border-red-500' : 'border-gray-700'
              }`}
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-[#8892b0]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full bg-gray-800 border p-2 rounded ${
                formErrors.email ? 'border-red-500' : 'border-gray-700'
              }`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-[#8892b0]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={` w-full bg-gray-800 border p-2 rounded ${
                formErrors.message ? 'border-red-500' : 'border-gray-700'
              }`}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
              )}
          </div>
            <button
            type="submit"
            className=" bg-gray-900 border border-[#A5FFC9] text-[#A5FFC9] px-4 py-2 outline-none rounded hover:bg-[#A5FFC9] hover:text-gray-900 text-lg  ease-in-out hover:scale-110  duration-700"

          >
            Submit
            </button>
           
        </form>
        </div>
      </div>
      
    </div>
  </section>

)};

