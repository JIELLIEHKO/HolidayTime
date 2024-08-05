import './About.css'
import background_forUs from '/public/img/Rectangle 39.png'

export default function About() {


    return(<section className='section-forUs'>

        <div className="title-section">
            <h2>Про нас</h2>
        </div>

        <div className='container-forUs'>

            <div className='top-forUs'>
                <img src={background_forUs} alt="img"/>
                <div className='hero-forUs'>
                    <h3>HolidayTime</h3>
                    <p>
                        Відпочинок, емоції, враження, нетипові маршрути, неймовірні локації - це все про сільськийеко-туризм в Україні
                    </p>
                </div>
            </div>

            <div className='bot-forUs'>
                <p>
                    Наша команда зібрала найколоритніші місця нашої країни саме для тебе.
                </p>
                <p>
                    Місія нашої компанії подарувати незабутні враження та показати Україну з іншої сторони. Пройти разом з Вами лісовими стежками, щоб попоїсти свіжого карпатського сиру. Пірнути у каньйон та побачити занурене під товщу років село Бакота. Покататись на гандолах в “українській Венеції”.
                </p>
                <p>
                    Пізнати Україну разом!
                </p>
            </div>

        </div>

    </section>)
}





