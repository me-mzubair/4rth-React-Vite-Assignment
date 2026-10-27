import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NotFound from "../../components/Misc/NotFound"

const Frontend = () => {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            <Footer />
        </>
    )
}

export default Frontend