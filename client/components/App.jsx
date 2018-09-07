import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './Navbar'
import Hero from './Hero'

const App = () => {
  return (
    <ParallaxProvider>
    
      <Navbar />
      <Hero />
    
    </ParallaxProvider>
    
  )
}

export default App

