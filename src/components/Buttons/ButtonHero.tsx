import { FC, useState } from 'react';
import HeroContent from '../Body/Section/Home/Hero/HeroContent';
import { heroContent } from '../../Data';
import Button from './Button';

interface HeroContentType {
	id: number;
	content: string;
}

const ButtonHero: FC = () => {
	const [buttonActive, setButtonActive] = useState<number>(0);
	const [active, setActive] = useState<boolean[]>(
		() => {
			const initialActive = Array(heroContent.length).fill(false);
			initialActive[0] = true;
			return initialActive;
		}
	);

	const handleContentButton = () => {
		return heroContent.map((num: HeroContentType, index: number) => (
			<Button
				key={num.id}
				classButton='button'
				isActive={active[index]}
				onClick={() => {
					const resetActiveButtons = Array(heroContent.length).fill(false);
					resetActiveButtons[index] = true;
					setActive(resetActiveButtons);
					setButtonActive(num.id);
				}}
			>
				{null}
			</Button>
		));
	};

	return (
		<>
			<HeroContent content={heroContent[buttonActive].content} />
			<div className='content-hero-button'>{handleContentButton()}</div>
		</>
	);
};

export default ButtonHero;