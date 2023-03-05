import './app.scss'

import { useState,lazy,Suspense } from 'react'

import Topbar from "./components/topbar/Topbar"
// import Intro from './components/intro/Intro'
// import TestMonios from './components/testmonios/TestMonios'
import Project from './components/testmonios/Project'
import Menu from './components/menu/Menu'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'
import Profolio from './components/profile/Profolio'


const Intro = lazy(() => import('./components/intro/Intro'))
// const Works = lazy(() => wait(3000).then(() => import('./components/works/Works')))
// --NOTE-- if they are export default everything will work fine
// const Works = lazy(() => import('./components/works/Works'))
// const Topbar = lazy(() => import('./components/topbar/Topbar'))
// const TestMonios = lazy(() => import('./components/testmonios/TestMonios'))
// const Contact = lazy(() => import('./components/contact/Contact'))
// const Profolio = lazy(() => import('./components/profile/Profolio'))

// exported file
// const Menu = lazy(() => import('./components/menu/Menu'))
// salution 
// const Menu = lazy(() => import('./components/menu/Menu').then(module => {
//   return {default:module.Menu}
// }))

// -- NOTE -- if export is not default 
// const Abc = lazy(() => import('./components/abc/Abc').then(module => {
//   return {default: module.Abc or file name}
// }))




const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      {!menuOpen && <div className="btns">
        <a href="#intro"><span className='active'></span></a>
        <a href="#work"><span></span></a>
        <a href="#profolio"><span></span></a>
        <a href="#project"><span></span></a>
        <a href="#contact"><span></span></a>
      </div>}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Suspense fallback={<h1>Loading...</h1>}>
      <Intro menuOpen={menuOpen}/>
      </Suspense>
      <Works/>
      <Profolio/>
      <Project/>
      <Contact/>
      </div>
    </div>
  )
}

// const wait = (time) => {
//   return new Promise(resolve => {
//     setTimeout(resolve,time)
//   })
// }

export default App