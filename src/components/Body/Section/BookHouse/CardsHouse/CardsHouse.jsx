import './CardsHouse.css'
import { GoStarFill } from "react-icons/go";
import {useState} from "react";
import {CardHouseButton} from "./CardHouseButton.jsx";

// eslint-disable-next-line react/prop-types
export default function CardsHouse({ photo, name, description, number, selectedCity}) {
    const [isActiveStar, setIsActiveStar] = useState(false)

    return (<div className='cardsHouse'>

        <div className='cardsHouse-img'>
            <img src={photo} alt="CardsHouse"/>
        </div>

        <div className='cardHouse-content'>
            <h3>{name}</h3>

            <div className='description-content'>
                <p>{description}</p>
            </div>
        </div>

        <CardHouseButton selectedCity={selectedCity} number={number}/>

        <GoStarFill onClick={() => setIsActiveStar(!isActiveStar)} className={isActiveStar ? 'star active' : 'star'}/>

    </div>)
}
