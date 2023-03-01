import './app.scss'

import { useState } from 'react'

import Topbar from "./components/topbar/Topbar"
import Intro from './components/intro/Intro'
import Profolio from './components/profolio/Profolio'
import Works from './components/works/Works'
import TestMonios from './components/testmonios/TestMonios'
import Menu from './components/menu/Menu'
import Contact from './components/contact/Contact'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro menuOpen={menuOpen}/>
      <Profolio/>
      <Works/>
      <TestMonios/>
      <Contact/>
      </div>
    </div>
  )
}

export default App