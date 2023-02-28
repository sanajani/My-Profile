import './app.scss'

import { useState } from 'react'

import Topbar from "./components/topbar/Topbar"
import Intro from './components/intro/Intro'
import Profolio from './components/profolio/Profolio'
import Works from './components/works/Works'
import TestMonios from './components/testmonios/TestMonios'
import Menu from './components/menu/Menu'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}/>
      <div className="sections">
      <Intro/>
      <Profolio/>
      <Works/>
      <TestMonios/>
      </div>
    </div>
  )
}

export default App