import './Profolio.scss'

const Profolio = () => {
  return (
    <div className='profolio' id='profolio'>
      <div className="container">
        <div className="innerContainer">
        <div className="left">
          <img src="./assets/profile.jpg" alt="profile" />
        </div>
        <div className="right">
          <h1>Hi, I'm Sanaullah Mobini 👋</h1>
          <p>I will help designers, small agencies and businesses bring their ideas to life. Powered</p>
          <p>by Figma, VS Code and coffee, I turn your requirements into CMS-ified and</p>
          <p>ecommerce-ified websites - on time and on budget.</p>
          <p>Got any questions? <a href="#contact">Contact me</a></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profolio