import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Bubble from './components/bubble'
import { StarBackground } from './components/starBackground'
import Skills from './components/skills'

const sections = [
  {id: "inicio", label: "Inicio"}, 
  {id: "acerca", label: "Acerca"},
  {id: "skills", label: "Habilidades"},
  {id: "proyectos", label: "Proyectos"},
  {id: "contacto", label: "Contacto"},
];

function App() {
  return (
    <div className='scroll-smooth text-slate-800'>
      <StarBackground/>      
      {<Navbar />}
      {<Hero />}
      {<About />}
      {<Skills />}
      {<Projects />}
      {<Contact />}
      {<Footer />}
      {<Bubble />}
    </div>
  )
}

export default App
export {sections}
