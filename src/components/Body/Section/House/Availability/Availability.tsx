import { FC } from 'react'
import './Availability.css'

const Availability: FC = () => {
	return (
		<div className='container-availability'>
			<h3>Наявність місць</h3>
			<div>
				<p>Коли б Ви хотіли зупинись в помешканні Полонини Карпат?</p>
				<form>
					<div>
						<label htmlFor='check-in-date'>Дата заїзду</label>
						<input type='text' id='check-in-date' />
						<label htmlFor='check-out-date'>Дата виїзду</label>
						<input type='text' id='check-out-date' />
						<button type='submit'>Перевірити наявність вільних місць</button>
					</div>
					<div>
						<label htmlFor='additional-info1'></label>
						<input type='text' id='additional-info1' />

						<label htmlFor='additional-info2'></label>
						<input type='text' id='additional-info2' />

						<label htmlFor='additional-info3'></label>
						<input type='text' id='additional-info3' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Availability
