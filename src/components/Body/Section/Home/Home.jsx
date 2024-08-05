import './Home.css'
import Hero from "./Hero/Hero.jsx";
import Card from "./Card/Card.jsx";
import Feedback from "./Feedback/Feedback.jsx";

export default function Home() {

    return (<main>
        <div className='main-content'>

            <Hero/>

            <Card/>

            <Feedback/>

        </div>

    </main>)
}