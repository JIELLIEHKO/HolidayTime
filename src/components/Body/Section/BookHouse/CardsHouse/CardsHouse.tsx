import { FC, useState } from 'react'
import { GoStarFill } from 'react-icons/go'
import CardHouseButton from './CardHouseButton'
import './CardsHouse.css'

interface CardsHouseProps {
	photo: string
	name: string
	description: string
	number: number
	selectedCity: string
}

const CardsHouse: FC<CardsHouseProps> = ({ photo, name, description, number, selectedCity }: CardsHouseProps) => {
	const [isActiveStar, setIsActiveStar] = useState<boolean>(false)

	return (
		<div className='cardsHouse'>
			<div className='cardsHouse-img'>
				<img src={photo} alt='CardsHouse' />
			</div>

			<div className='cardHouse-content'>
				<h3>{name}</h3>

				<div className='description-content'>
					<p>{description}</p>
				</div>
			</div>

			<CardHouseButton selectedCity={selectedCity} number={number} />

			<GoStarFill
				onClick={() => setIsActiveStar(!isActiveStar)}
				className={isActiveStar ? 'star active' : 'star'}
			/>
		</div>
	)
}

export default CardsHouse