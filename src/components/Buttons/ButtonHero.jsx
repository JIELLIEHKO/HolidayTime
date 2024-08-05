import HeroContent from "../Body/Section/Home/Hero/HeroContent.jsx";
import {heroContent} from "../../Data.js";
import Button from "./Button.jsx";
import {useState} from "react";

export default function ButtonHero() {
    const [buttonActive, setButtonActive] = useState(0)
    const [active, setActive] = useState(() => {
        const initialActive = Array(heroContent.length).fill(false); // Создаем массив с false
        initialActive[0] = true; // Устанавливаем первый элемент в true
        return initialActive; // Возвращаем массив в качестве начального состояния
    });
    function handleContentButton() {

        return heroContent.map((num, index) => <Button
            key={num.id}
            classButton='button'
            isActive={active[index]}
            onClick={() => {
                const resetActiveButtons = Array(heroContent.length).fill(false);
                resetActiveButtons[index] = true;
                setActive(resetActiveButtons); // Обновляем состояние активности кнопок
                setButtonActive(num.id);
            }}>
            {null}
        </Button>)
    }

    return(<>

        <HeroContent content={heroContent[buttonActive].content}/>
        <div className='content-hero-button'>
            {handleContentButton()}
        </div>

    </>)
}