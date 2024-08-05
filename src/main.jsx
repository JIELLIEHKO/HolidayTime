import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./components/Body/Section/Home/Home.jsx";
import About from "./components/Body/Section/About/About.jsx";
import BookHouse from "./components/Body/Section/BookHouse/BookHouse.jsx";
import Contact from "./components/Body/Section/Contact/Contact.jsx";
import Cabinet from "./components/Body/Section/Cabinet/Cabinet.jsx";
import House from "./components/Body/Section/House/House.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App section={<Home/>} />
    },
    {
        path: '/about',
        element: <App section={<About/>} />
    },
    {
        path: '/bookhouse',
        element: <App section={<BookHouse/>} />
    },
    {
        path: '/contact',
        element: <App section={<Contact/>} />
    },
    {
        path: '/cabinet',
        element: <App section={<Cabinet/>} />
    },
    {
        path: '/bookhouse/house/bakota',
        element: <App section={<House/>} />
    },
    {
        path: '/bookhouse/house/karpathy',
        element: <App section={<House/>} />
    },
    {
        path: '/bookhouse/house/kyiv',
        element: <App section={<House/>} />
    },
    {
        path: '/bookhouse/house/odessa',
        element: <App section={<House/>} />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
