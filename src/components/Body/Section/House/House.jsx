import './House.css'
import {HouseReview} from "./HouseReview.jsx";
import {HouseTable} from "./HouseTable.jsx";
//import Availability from "./Availability/Availability.jsx";

export default function House() {

    return(<section className='section-house'>

        <div className="title-section">
            <h2>Забронювати будиночок</h2>
        </div>
        <div className='container-house'>

            <HouseReview />

           {/* <Availability />*/}

           <HouseTable />
        </div>
    </section>
    )
}
