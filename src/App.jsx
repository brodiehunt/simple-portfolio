import { useState } from 'react'
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'
function App() {
  

  return (
    <div className="main-container">
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
