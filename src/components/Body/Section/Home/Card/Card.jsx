import card from '/public/img/image 4.png'
import "./Card.css"

export default function Card() {

    return (
        <div className='card-main'>
            <div className='card-img'>
                <img src={card} alt="card"/>
            </div>
            <div className='card-content'>
                <p>Активний відпочинок у нетипових лоцаціях. Незаймана природа та місцевий колорит подарують Вам незабутні враження.</p>
            </div>
        </div>
    )
}