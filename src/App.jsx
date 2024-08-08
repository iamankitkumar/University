import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contac from './Components/Contact/Contac';
import Footer from './Components/Footer/Footer';
import Videoplayer from './Components/Videoplayer/Videoplayer';
const App = () => {

      const [playstate, setPlayState]= useState(false)    
  
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='OUR PROGRAM' title='What We Offers'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title='What Student Says'/>
    <Testimonials/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contac/>
    <Footer/>
    </div>
   
    <Videoplayer playstate={playstate} setPlayState={setPlayState}/>
    </div>
  )
}

export default App