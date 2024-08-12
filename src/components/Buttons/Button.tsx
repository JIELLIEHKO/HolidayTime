import './Button.css'
import { FC, ReactNode } from 'react'

interface ButtonProps {
	children: ReactNode
	onClick: (isActive: boolean) => void
	isActive: boolean
	classButton: string
}

const Button: FC<ButtonProps> = ({ children, onClick, isActive, classButton }) => {
	return (
		<div className='button-container'>
			<button
				onClick={() => onClick(!isActive)}
				className={isActive ? 'button active' : classButton}
			>
				{children}
			</button>
		</div>
	)
}

export default Button