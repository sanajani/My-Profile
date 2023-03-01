import './Slider.scss'
import { useState } from 'react'


const Slider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='slider'>
    <div style={{backgroundImage:`url(${slides[currentIndex].imgUrl})`}} className="sliderContainer">

    </div>
    </div>
  )
}

export default Slider