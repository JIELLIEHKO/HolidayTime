import './Button.css'

// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, isActive, classButton }) {

    return(
        <div className='button-container'>
            <button
                onClick={() => onClick(!isActive)}
                className={isActive ? 'button active' : classButton}>
                {children}
            </button>
        </div>
    )
}