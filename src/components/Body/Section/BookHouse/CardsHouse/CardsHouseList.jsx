import CardsHouse from "./CardsHouse.jsx";
import {descriptionHouse} from '/src/Data.js'

// eslint-disable-next-line react/prop-types
export function CardsHouseList({ city }) {
    let housesToShow = descriptionHouse;

    if (city === true) {
        housesToShow = descriptionHouse;
    } else if (city) {
        housesToShow = descriptionHouse.filter(value => value.city === city);
    }

    return (
        <div className='cardsHouse-container'>
            {housesToShow.map((value) => {
                return (<>

                    <CardsHouse
                        key={value.index}
                        photo={value.img}
                        name={value.title}
                        description={value.description}
                        number={value.index}
                        selectedCity={value.cityTo}
                    />

                </>)})}

        </div>
    );
}


