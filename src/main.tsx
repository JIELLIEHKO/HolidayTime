import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Body/Section/Home/Home'
import About from './components/Body/Section/About/About'
import BookHouse from './components/Body/Section/BookHouse/BookHouse'
import Contact from './components/Body/Section/Contact/Contact'
import Cabinet from './components/Body/Section/Cabinet/Cabinet'
import House from './components/Body/Section/House/House'
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'
import './index.css'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <App section={<Home />} />
	},
	{
		path: '/about',
		element: <App section={<About />} />
	},
	{
		path: '/bookhouse',
		element: <App section={<BookHouse />} />
	},
	{
		path: '/contact',
		element: <App section={<Contact />} />
	},
	{
		path: '/cabinet',
		element: <App section={<Cabinet />} />
	},
	{
		path: '/bookhouse/house/bakota',
		element: <App section={<House />} />
	},
	{
		path: '/bookhouse/house/karpathy',
		element: <App section={<House />} />
	},
	{
		path: '/bookhouse/house/kyiv',
		element: <App section={<House />} />
	},
	{
		path: '/bookhouse/house/odessa',
		element: <App section={<House />} />
	}
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
