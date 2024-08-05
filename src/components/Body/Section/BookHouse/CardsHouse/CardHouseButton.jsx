import {descriptionHouse} from "../../../../../Data.js";
import {Link} from "react-router-dom";
import Button from "../../../../Buttons/Button.jsx";

// eslint-disable-next-line react/prop-types
export function CardHouseButton({ number, selectedCity }) {
    const house = descriptionHouse[number];

    // Проверяем, соответствует ли дом выбранному городу
    if (house.cityTo !== selectedCity) {
        return null; // Если не соответствует, не отображаем компонент
    }

    return (
        <>
            <Link
                to={`/bookhouse/house/${house.house}`}
            >
                <Button
                    classButton='button-deteils'
                >
                    Детальніше
                </Button>
            </Link>
        </>
    );
}
