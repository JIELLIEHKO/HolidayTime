import ReactDOM from 'react-dom';
import './Modal.css'
import { SquareX } from 'lucide-react';


// eslint-disable-next-line react/prop-types
export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <dialog open className="modal-dialog">
                <div className="modal-content">
                    <SquareX
                        onClick={onClose}
                        className="close">
                    </SquareX>
                    {children}
                </div>
            </dialog>
        </div>,
        document.getElementById('modal-root')
    );
}

