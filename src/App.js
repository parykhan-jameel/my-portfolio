import React, {useState, useEffect} from 'react';
import PageLoader from"./components/pageLoader"
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';
import Bot from './components/Bot';
import { preLoaderAnim } from './animation';
//import {motion, AnimatePresence} from "framer-motion";
//import { BrowserRouter as Router, Route , useLocation } from 'react-router-dom';



//import BeatLoader from "react-spinners/BeatLoader";
//import './App.css';

function App() {
  
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      preLoaderAnim()
      // Simulate loading time
      setTimeout(()=>{
        setIsLoading(false)
      },2000)
    }, []);

  return (

 
 
    <main className="text-[#fff]  body-font bg-gray-900">
  
    {isLoading ? 
  
      <PageLoader/>
    :
     <div>
      <Navbar />
      <Hero/>
      <About/>
      <Projects />
      <Skills />
      <Contact />
      <Bot/>
      <Footer />
    </div>
     }
      
      
      
  
    
    </main>
  
  );
}

export default App;
