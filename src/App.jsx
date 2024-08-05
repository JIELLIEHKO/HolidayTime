import Header from "./components/Body/Header/Header.jsx";
import Footer from "./components/Body/Footer/Footer.jsx";

// eslint-disable-next-line react/prop-types
function App({ section }) {

    return (
        <>
            <Header                          />

            {section}

            <Footer/>
        </>
    )
}

export default App
