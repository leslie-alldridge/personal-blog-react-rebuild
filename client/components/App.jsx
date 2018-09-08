import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './Navbar'
import Hero from './Hero'
import Blog from './Blog'
import BlogDetail from './BlogDetail'

const App = () => {
  return (
    <ParallaxProvider>
    
      <Navbar />
      <Hero />
      <Blog />
      <BlogDetail/>
    </ParallaxProvider>
    
  )
}

export default App

