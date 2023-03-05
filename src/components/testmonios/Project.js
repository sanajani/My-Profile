import './Project.scss'

import ComingSoon from '../comingsoon/ComingSoon'

const Project = () => {
  return (
    <div className='project' id='project'>
      <div className="container">
        <h1>Projects Coming Soon</h1>
        {/* <div className='animationContainer'>
          <div className='animation animation-1'><span>P</span><span>R</span><span>O</span><span>J</span><span>E</span><span>C</span><span>T</span></div>
          <div className='animation animation-2'><span>C</span><span>O</span><span>M</span><span>I</span><span>N</span><span>G</span></div>
          <div className='animation animation-3'><span>S</span><span>O</span><span>O</span><span>N</span></div>
        </div> */}
        <ComingSoon/>
      </div>
    </div>
  )
}

export default Project