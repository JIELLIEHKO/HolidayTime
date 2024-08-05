import {User} from "lucide-react";
import {MdOutlineBed} from "react-icons/md";

export function HouseTable() {
    return (
        <>
            <div className='container-table'>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Вміщує</th>
                        <th>Тип розміщення</th>
                        <th>Ціна</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <User className='people'/>
                                <User className='people'/>
                            </td>
                            <td>
                                <p>Двомісний номер</p>
                                <div>
                                    <p>1 широке двоспальне ліжко</p>
                                    <MdOutlineBed className='bed'/>
                                </div>
                            </td>
                            <td>
                                <button>Показати ціни</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
