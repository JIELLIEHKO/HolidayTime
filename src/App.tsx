import { FC, ReactNode } from 'react'
import Header from './components/Body/Header/Header'
import Footer from './components/Body/Footer/Footer'

interface AppProps {
	section: ReactNode
}

const App: FC<AppProps> = ({ section }) => {
	return (
		<>
			<Header />

			{section}

			<Footer />
		</>
	)
}

export default App
