import './Availability.css'

export default function Availability() {

    return(<>

        <div className='container-availability'>
            <h3>Наявність місць</h3>

            <div>
                <p>Коли б Ви хотіли зупинись в помешканні Полонини Карпат?</p>

                <form>
                    <div>
                        <label htmlFor="">Дата заїзду</label>
                        <input type="text"/>

                        <label htmlFor="">Дата виїзду</label>
                        <input type="text"/>

                        <button>Перевірити наявність вільних місць</button>
                    </div>

                    <div>
                        <label htmlFor=""></label>
                        <input type="text"/>

                        <label htmlFor=""></label>
                        <input type="text"/>

                        <label htmlFor=""></label>
                        <input type="text"/>
                    </div>
                </form>

            </div>
        </div>


    </>)
}