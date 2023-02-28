import './Intro.scss'
import { useEffect, useRef } from 'react'
import { init } from 'ityped'


const Intro = () => {

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, There I'm</h2>
          <h1>Sanaullah Mobini</h1>
          <h3>Freelancer <span>Developer</span></h3>
        </div>
        <a href="#profolio"><img src="./assets/down.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Intro