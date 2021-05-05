import React, {useState, useEffect} from 'react'
import './Slider.scss'

const Slider = () => {
	const [sliders, setSliders] = useState([
		'./banners/1.jpg',
		'./banners/2.jpg',
		'./banners/3.jpg',
		'./banners/4.jpg',
		'./banners/5.jpg',
		'./banners/6.jpg'
	])

	const [current, setCurrent] = useState(0)

	const handlePrev = () => {	 
		current <= 0 ? setCurrent(sliders.length - 1) : setCurrent(current - 1)
	}

	const handleNext = () => {
		current >= sliders.length - 1 ? setCurrent(0) : setCurrent(current + 1)
	}

	useEffect(_ => {
		const interval = setInterval(() => {
		    handleNext()
		}, 4500);
		return () => clearInterval(interval);
	})

	return(
		<div className='slider'>
			<button className='slider-btn prev' onClick={handlePrev}>
				<svg viewBox="0 0 17 49" id="icon-slider-right">
				    <path d="M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z"></path>
				</svg>
			</button>
			<button className='slider-btn next' onClick={handleNext}>
				<svg viewBox="0 0 17 49" id="icon-slider-right">
				    <path d="M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z"></path>
				</svg>
			</button>

			<a href='#'><img src={sliders[current]}/></a>
		</div>
	)
}

export default Slider