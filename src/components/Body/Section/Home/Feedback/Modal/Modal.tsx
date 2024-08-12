import ReactDOM from 'react-dom'
import './Modal.css'
import { SquareX } from 'lucide-react'
import { FC, ReactNode } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className='modal-overlay'>
			<dialog open className='modal-dialog'>
				<div className='modal-content'>
					<SquareX onClick={onClose} className='close' />
					{children}
				</div>
			</dialog>
		</div>,
		document.getElementById('modal-root')!
	)
}

export default Modal