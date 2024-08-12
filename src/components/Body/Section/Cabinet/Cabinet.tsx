import './Cabinet.css'
import avatar from '/public/avatar.png'
import { FC } from 'react'

const Cabinet: FC = () => {
	return (
		<section className='section-cabinet'>
			<div className='title-section'>
				<h2>Особистий кабінет</h2>
			</div>

			<div className='container-cabinet'>
				<div className='cabinet'>
					<div className='container-avatar'>
						<img src={avatar} alt='avatar' />
						<div className='button-container'>
							<button className='button'>Змінити аватар</button>
						</div>
						<div className='button-container'>
							<button className='button setting'>Налаштування</button>
						</div>
					</div>
					<div className='container-info'>
						<p>
							<strong>Петров Іван Іванович</strong>
						</p>
						<p>
							<strong>Стать: </strong>чоловіча
						</p>
						<p>
							<strong>Дата народження: </strong>10. 02. 1998
						</p>
						<p>
							<strong>Мобільний телефон: </strong>+38(097)346-72-50
						</p>
						<p>
							<strong>Ел. пошта: </strong>petrov@gmail.com
						</p>
					</div>
				</div>
				<div className='button-container'>
					<button className='button exit'>Вийти</button>
				</div>
			</div>
		</section>
	)
}

export default Cabinet
