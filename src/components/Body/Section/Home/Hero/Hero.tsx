import React from 'react'
import hero from '../../../../../../public/img/image 3.png'
import './Hero.css'
import ButtonHero from '../../../../Buttons/ButtonHero'
import { IoIosArrowRoundForward } from 'react-icons/io'
import title_hero from '../../../../../../public/img/12345 1.png'
import Button from '../../../../Buttons/Button'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
	const handleButtonClick = () => {
		// Определите логику обработки нажатия кнопки, если требуется
	}

	return (
		<div className='hero'>
			<div className='hero-title'>
				<img src={title_hero} alt='title-hero' />
				<div className='hero-content'>
					<h1>HolidayTime</h1>
					<p>Автентичний відпочинок серед українського колориту!</p>
				</div>
			</div>

			<div className='hero-bottom'>
				<img src={hero} alt='hero' />
				<div className='hero-bottom-container'>
					<div className='hero-bottom-content'>
						<Link to='/bookhouse/house/karpathy'>
							<Button
								classButton='button-review'
								onClick={handleButtonClick}
								isActive={false} // Передайте корректное значение
							>
								Переглянути
								<IoIosArrowRoundForward
									style={{ height: '1.5em', width: '1.5em' }}
								/>
							</Button>
						</Link>

						<ButtonHero />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero