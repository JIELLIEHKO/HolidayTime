import { FC } from 'react'
import './House.css'
import HouseReview from './HouseReview.tsx'
import HouseTable from './HouseTable.tsx'
//import Availability from "./Availability/Availability.tsx";

const House: FC = () => {
	return (
		<section className='section-house'>
			<div className='title-section'>
				<h2>Забронювати будиночок</h2>
			</div>
			<div className='container-house'>
				<HouseReview />
				{/* <Availability />*/}
				<HouseTable />
			</div>
		</section>
	)
}

export default House