import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { About } from "./pages/About"
import { Lodging } from "./pages/Lodging"
import { Error } from "./pages/Error"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging" element={<Lodging />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
