import map from '/public/map.png'
import './Contact.css'
import { FC } from 'react'

const Contact: FC = () => {
	return (
		<section className='section-contacts'>
			<div className='title-section'>
				<h2>Контакти</h2>
			</div>

			<div className='container-contacts-card'>
				<div className='contacts'>
					<div className='contacts-card'>
						<h4>Телефон</h4>
						<p>+38(097)119-89-83</p>
					</div>
					<div className='contacts-card center'>
						<h4>Графік роботи</h4>
						<p>пн-пт 08:00-22:00</p>
						<p>сб 09:00-21:00</p>
						<p>вс 10:00-20:00</p>
					</div>
					<div className='contacts-card'>
						<h4>Ел. пошта</h4>
						<p>hello@gmail.com</p>
					</div>
				</div>
				<div className='contacts'>
					<div className='contacts-card'>
						<h4>Адреса офісу</h4>
						<p>м. Київ, вул. Малевича, буд. 4</p>
					</div>
					<div className='contacts-card'>
						<img src={map} alt='map' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact