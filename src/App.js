import './app.scss'

import { useState } from 'react';

import Topbar from "./components/topbar/Topbar"

// import Menu from '../menu/Menu'
import Menu from './components/menu/Menu';

import Intro from './components/intro/Intro'
import Profolio from './components/profolio/Profolio'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import TestMonios from './components/testmonios/TestMonios'




const App = () => { 

  return (
    <div className="app">
      <Topbar/>
      <Menu/> 
      <div className="sections">
        <Intro/>
        <Profolio/>
        <Works/>
        <TestMonios/>
        <Contact/>
      </div>
    </div>
  )
}

export default App