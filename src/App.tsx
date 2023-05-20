import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Lodging } from "./pages/Lodging"
import { Error } from "./pages/Error"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging" element={<Lodging />} />
            </Routes>
        </>
    )
}

export default App
