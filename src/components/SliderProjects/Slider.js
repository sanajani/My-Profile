import './Slider.scss'
import { useState } from 'react'


const Slider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)



  const nextSlide = () => {
    const nextSlides = currentIndex === slides.length -1
    const newIndex = nextSlides ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const preSlide = () => {
    const preSlides = currentIndex === 0
    const newIndex = preSlides ? slides.length -1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }


  const sliderContainerStyle = {
    backgroundImage:`url(${slides[currentIndex].imgUrl})`
  }

  return (
    <div className='slider'>
    <div style={sliderContainerStyle} className="sliderContainer">
      <h1>{slides[currentIndex].name}</h1>
      <p>{slides[currentIndex].title}</p>
        <span className='preSlide' onClick={preSlide}><img src="./assets/backwordarrow.png" alt="" /></span>
        <span className='nextSlide' onClick={nextSlide}><img src="./assets/forwordarrow.png" alt="" /></span>
    </div>
    </div>
  )
}

export default Slider