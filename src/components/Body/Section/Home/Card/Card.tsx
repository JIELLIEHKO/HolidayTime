import card from '/public/img/image 4.png'
import './Card.css'
import { FC } from 'react'

const Card: FC = () => {
	return (
		<div className='card-main'>
			<div className='card-img'>
				<img src={card} alt='card' />
			</div>
			<div className='card-content'>
				<p>
					Активний відпочинок у нетипових лоцаціях. Незаймана природа та
					місцевий колорит подарують Вам незабутні враження.
				</p>
			</div>
		</div>
	)
}

export default Card