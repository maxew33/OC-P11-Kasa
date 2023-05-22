import React from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

export const About: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <div data-testid="about">ABOUT</div>
            <Footer />
        </>
    )
}
