import './Home.css'
import Hero from './Hero/Hero'
import Card from './Card/Card'
import Feedback from './Feedback/Feedback'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<main>
			<div className='main-content'>
				<Hero />
				<Card />
				<Feedback />
			</div>
		</main>
	)
}

export default Home