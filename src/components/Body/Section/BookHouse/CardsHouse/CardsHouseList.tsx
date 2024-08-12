import CardsHouse from './CardsHouse.tsx'
import { descriptionHouse } from '../../../../../Data.ts'
import { FC } from 'react'

interface HouseDescription {
	img: string
	title: string
	description: string
	index: number
	city: string
	cityTo: string
}

interface CardsHouseListProps {
	city: string | boolean | null
}

const CardsHouseList: FC<CardsHouseListProps> = ({ city }) => {
	let housesToShow: HouseDescription[] = descriptionHouse

	if (city === true) {
		housesToShow = descriptionHouse
	} else if (city) {
		housesToShow = descriptionHouse.filter(value => value.city === city)
	}

	return (
		<div className='cardsHouse-container'>
			{housesToShow.map(value => (
				<CardsHouse
					key={value.index}
					photo={value.img}
					name={value.title}
					description={value.description}
					number={value.index}
					selectedCity={value.cityTo}
				/>
			))}
		</div>
	)
}

export default CardsHouseList