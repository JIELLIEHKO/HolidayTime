import {imageHouse} from "../../../../Data.js";

export function HouseReview() {
    return (<>

        {imageHouse.map((house, index) => {
            return (
                <div
                    className='house'
                    key={index}
                >

                    <div className='house-img-big'>
                        <img src={house.img_big_1} alt="house-big"/>
                        <img src={house.img_big_2} alt="house-big"/>
                    </div>

                    <div className='house-info'>
                        <div className='house-info-text'>
                            <p>{house.descriptionTop}</p>
                            <p>{house.descriptionBot}</p>
                        </div>

                        <div className='house-img-small'>
                            <img src={house.img_small_1} alt="house-small"/>
                            <img src={house.img_small_2} alt="house-small"/>
                        </div>
                    </div>

                </div>
            )
        })}
    </>);
}
