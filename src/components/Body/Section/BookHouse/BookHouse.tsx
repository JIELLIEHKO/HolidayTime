import { FC, useState } from 'react'
import './BookHouse.css'
import { TbTriangleInvertedFilled } from 'react-icons/tb'
import CardsHouseList from './CardsHouse/CardsHouseList'
import { cities } from '../../../../Data'

type City = string

const BookHouse: FC = () => {
	const [selectedCity, setSelectedCity] = useState<City | null>(null)

	return (
		<section className='section-bookHouse'>
			<div className='title-section'>
				<h2>Забронювати будиночок</h2>
			</div>

			<div className='change-city'>
				<div className='triangle-icon-container'>
					<TbTriangleInvertedFilled className='triangle-icon' />
				</div>

				<select
					className='change-select'
					onChange={e => setSelectedCity(e.target.value as City)}
					value={selectedCity || ''}
				>
					{cities.map(city => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>

				<div className='cardsHouse-container'>
					{selectedCity !== 'Всі міста' ? (
						<CardsHouseList city={selectedCity} />
					) : (
						<CardsHouseList city={null} />
					)}
				</div>
			</div>
		</section>
	)
}

export default BookHouse
