import './Intro.scss'

const Intro = ({ menuOpen }) => {

  return (
    <div className={'intro ' + (menuOpen && 'active')} id='intro'>
      <div className="container">
        <div className={"animation " + (menuOpen && 'active')}></div>
        <h2><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>, I am</h2>
        <h1>Sanaullah Mobini</h1>
        <h3>Freelancer & <span>Developer</span></h3>
        <div className="arrowContainer" >
          <a href="#profolio">
          <img src="./assets/arrowdown.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro