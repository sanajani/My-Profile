import './Works.scss'
import Slider from '../SliderProjects/Slider'

const projects = [
  { name: "ECOMERCE WEBSTE", title: "Nice and cool project", imgUrl: './assets/img-1.jpg' },
  { name: "EDUCATION WEBSTE", title: "student registation system", imgUrl: './assets/img-2.jpg' },
  { name: "FUN WEBSTE", title: "Let's have some fun", imgUrl: './assets/img-3.jpg' },
  { name: "BLOG WEBSTE", title: "Let's read more about React", imgUrl: './assets/img-4.jpg' },
  { name: "GYP WEBSTE", title: "Let's Make body for better live", imgUrl: './assets/img-5.jpg' },
]


const Works = () => {
  return (
    <div className='work' id='work'>
      <div className="container">
        <div className="insideSlider">
        <h1>Works</h1>
        <Slider slides={projects}  />
        </div>
      </div>
    </div>
  )
}

export default Works