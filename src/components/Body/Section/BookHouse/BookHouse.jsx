import './BookHouse.css'
import { TbTriangleInvertedFilled } from "react-icons/tb";
import {useState} from "react";
import {CardsHouseList} from "./CardsHouse/CardsHouseList.jsx";
import {cities} from "../../../../Data.js";

export default function BookHouse() {
    const [selectedCity, setSelectedCity] = useState(null);

    return (<section className='section-bookHouse'>

        <div className="title-section">
            <h2>Забронювати будиночок</h2>
        </div>

        <div className='change-city'>
            <div className='triangle-icon-container'>
                <TbTriangleInvertedFilled className='triangle-icon'/>
            </div>

            <select
                className='change-select'
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                {cities.map(city => (
                    <option
                        key={city}
                        value={city}
                    >
                        {city}
                    </option>
                ))}
            </select>

            <div className='cardsHouse-container'>
                {selectedCity !== 'Всі міста' ? <CardsHouseList city={selectedCity} />
                    : <CardsHouseList city={selectedCity === null}/>
                }
            </div>
        </div>
</section>)
}




