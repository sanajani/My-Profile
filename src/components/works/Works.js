import './Works.scss'
// import Slider from '../SliderProjects/Slider'
// import '../testmonios/Project.scss'

import ComingSoon from '../comingsoon/ComingSoon'

// const projects = [
//   { name: "ECOMERCE WEBSTE", title: "Nice and cool project Lorem ipsum dolor sit amet consectetur adipisicing elit Perspiciatis, tempora", imgUrl: './assets/img-1.jpg' },
//   { name: "EDUCATION WEBSTE", title: "student registation  Lorem ipsum dolor sit amet consectetur adipisicing elit Perspiciatis, tempora system", imgUrl: './assets/img-2.jpg' },
//   { name: "FUN WEBSTE", title: "Let's have  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tempora some fun", imgUrl: './assets/img-3.jpg' },
//   { name: "BLOG WEBSTE", title: "Let's read more about Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tempora?React", imgUrl: './assets/img-4.jpg' },
//   { name: "GYP WEBSTE", title: "Let's Make body  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tempora?  for better live", imgUrl: './assets/img-5.jpg' },
// ]


const Works = () => {
  return (
    <div className='work' id='work'>
      <div className="container">
        <h1>Works</h1>
        {/* <div className="insideSlider"> */}
        {/* <Slider slides={projects}  /> */}
        {/* </div> */}
        <ComingSoon/>
      </div>
    </div>
  )
}

export default Works