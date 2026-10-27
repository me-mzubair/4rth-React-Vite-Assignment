import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NotFound from "../../components/Misc/NotFound"
import Todos from "./Todos"

const Dashboard = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="todos/*" element={<Todos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Dashboard