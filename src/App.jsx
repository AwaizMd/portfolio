import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <About/>
     <Skills/>
     <Experience/>
     <Projects/>
    </>
  )
}

export default App