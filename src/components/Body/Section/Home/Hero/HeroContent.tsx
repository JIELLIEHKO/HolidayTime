import { FC } from 'react'

interface HeroContentProps {
	content: string
}

const HeroContent: FC<HeroContentProps> = ({ content }) => {
	return (
		<>
			<p>{content}</p>
		</>
	)
}

export default HeroContent