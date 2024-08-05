import './Feedback.css'
import {useRef, useState} from "react";
import {Modal} from "./Modal/Modal.jsx";

export default function Feedback() {
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const [text, setText] = useState({
        name: '',
        phone: '',
    });
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChangeText = (e) => {
        const { name, value } = e.target;
        setText(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal();
    };

    return (<div className='container-feedback'>
        <div className='feedback'>
            <h2>Зворотній зв`язок</h2>

            <div id="modal-root">

            </div>

            <form onSubmit={handleSubmit}>

                <label>Ім`я</label>
                <input
                    ref={nameRef}
                    name='name'
                    placeholder='Введіть ім`я'
                    onChange={handleChangeText}
                />

                <label>Номер телефону</label>
                <input
                    ref={phoneRef}
                    name='phone'
                    onChange={handleChangeText}
                    type='text'
                    placeholder='Введіть номер телефону'/>

                <button
                    type="button"
                    className='button'
                    onClick={toggleModal}
                >
                    Запросити виклик
                </button>

            </form>

            <Modal
                isOpen={isOpen}
                onClose={toggleModal}
            >
                <h2>Привіт, лист вже відправленний, тому будь-ласка чекайте на наш дзвінок найближчим часом! Гарного вам дня)</h2>
                <p>Ім`я: {text.name}</p>
                <p>Номер телефону: {text.phone}</p>
            </Modal>
        </div>
    </div>)
}