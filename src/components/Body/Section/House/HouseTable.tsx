import { FC } from 'react'
import { User } from 'lucide-react'
import { MdOutlineBed } from 'react-icons/md'

const HouseTable: FC = () => {
	return (
		<div className='container-table'>
			<table style={{border: '1px solid black'}}>
				<thead>
				<tr style={{border: '1px solid black'}}>
					<th style={{border: '1px solid black'}}>Вміщує</th>
					<th style={{border: '1px solid black'}}>Тип розміщення</th>
					<th style={{border: '1px solid black'}}>Ціна</th>
				</tr>
				</thead>
				<tbody>
				<tr style={{border: '1px solid black'}}>
					<td style={{border: '1px solid black'}}>
						<User className='people' />
						<User className='people' />
					</td>
					<td style={{border: '1px solid black'}}>
						<p>Двомісний номер</p>
						<div>
							<p>1 широке двоспальне ліжко</p>
							<MdOutlineBed className='bed' />
						</div>
					</td>
					<td style={{border: '1px solid black'}}>
						<button>Показати ціни</button>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	)
}

export default HouseTable