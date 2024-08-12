import React from 'react'
import { descriptionHouse } from '../../../../../Data.ts'
import { Link } from 'react-router-dom'
import Button from '../../../../Buttons/Button.tsx'

interface HouseDescription {
	cityTo: string
	house: string
}

interface CardHouseButtonProps {
	number: number
	selectedCity: string
}

const CardHouseButton: React.FC<CardHouseButtonProps> = ({ number, selectedCity }) => {
	const house: HouseDescription = descriptionHouse[number]

	if (house.cityTo !== selectedCity) {
		return null
	}

	return (
		<Link to={`/bookhouse/house/${house.house}`}>
			<Button
				classButton='button-deteils'
				onClick={() => { /* handle click logic here */ }}
				isActive={false} // or some logic to determine active state
			>
				Детальніше
			</Button>
		</Link>
	)
}

export default CardHouseButton