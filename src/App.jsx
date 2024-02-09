import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import FeatureProjects from './Components/FeatureProjects'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {

  
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <FeatureProjects/>
      <Cards />
      <Footer />
    </div>
  )
}

export default App