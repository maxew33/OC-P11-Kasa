import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Error from "../pages/error/Error"
import About from "../pages/about/About"
import Lodging from "../pages/lodging/Lodging"

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging/:id" element={<Lodging />} />
            </Routes>
        </>
    )
}
