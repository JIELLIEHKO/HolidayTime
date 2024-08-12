import { FC, useState, useEffect } from 'react'
import logo from '/public/mount-logo.png'
import './Header.css'
import { GrLanguage } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { arrLink } from '../../../Data'

interface LinkItem {
	link: string
	text: string
}

const Header: FC = () => {
	const [isActiveNav, setIsActiveNav] = useState<boolean[]>(() => {
		const activeIndex = localStorage.getItem('activeIndex')
		const arrActiveNav = Array(arrLink.length).fill(false)
		arrActiveNav[Number(activeIndex) || 0] = true
		return arrActiveNav
	})

	useEffect(() => {
		localStorage.setItem('activeIndex', isActiveNav.indexOf(true).toString())
	}, [isActiveNav])

	const handleNavClick = (index: number, link: string) => {
		const resetActiveButtons = Array(arrLink.length).fill(false)
		resetActiveButtons[index] = true
		setIsActiveNav(resetActiveButtons)
		onChange(link)
	}

	const onChange = (link: string) => {
		console.log('Navigation changed to:', link)
	}

	return (
		<header>
			<div className='container-header'>
				<Link to='/'>
					<img className='logo' src={logo} alt='logo' />
				</Link>
				<section className='section-breadcrumbs'>
					{arrLink.map((value: LinkItem, index: number) => (
						<Link
							to={value.link}
							key={index}
							className={isActiveNav[index] ? 'link active' : 'link'}
							onClick={() => handleNavClick(index, value.link)}
						>
							{value.text}
						</Link>
					))}

					<div className='language'>
						<GrLanguage style={{ fontSize: '36px' }} />
						<p>UA</p> {/* Сделать переключатель между языками через { props === 'UA ? <p>UA</p> } */}
					</div>
				</section>
			</div>
		</header>
	)
}

export default Header