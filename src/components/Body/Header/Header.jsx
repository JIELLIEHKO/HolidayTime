import logo from '/public/mount-logo.png'
import './Header.css'
import {GrLanguage} from "react-icons/gr";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {arrLink} from "/src/Data.js";

// eslint-disable-next-line react/prop-types
export default function Header({ onChange }) {
    const [isActiveNav, setIsActiveNav] = useState(() => {
        const activeIndex = localStorage.getItem('activeIndex')
        const arrActiveNav = Array(arrLink.length).fill(false);
        arrActiveNav[activeIndex || 0] = true;
        return arrActiveNav;
    })

    useEffect(() => {
        localStorage.setItem('activeIndex', isActiveNav.indexOf(true));
    }, [isActiveNav]);

    return (<header>
        <div className='container-header'>
            <Link to='/'>
                <img className='logo' src={logo} alt="logo"/>
            </Link>
            <section className='section-breadcrumbs'>
                {arrLink.map((value ,index) => {
                    return <Link
                        to={value.link}
                        key={index}
                        className={isActiveNav[index] ? 'link active' : 'link'}
                        onClick={() => {
                             const resetActiveButtons =
                                 Array(arrLink.length).fill(false);
                             resetActiveButtons[index] = true;
                             setIsActiveNav(resetActiveButtons);
                             onChange(value.link)
                         }}
                    >
                        {value.text}
                    </Link>
                })}

                <div className='language'>
                    <GrLanguage style={{fontSize: '36px'}}/>
                    <p>UA</p>  {/* Сделать переключатель между языками через { props === 'UA ? <p>UA</p> }*/}
                </div>
            </section>
        </div>
    </header>)
}