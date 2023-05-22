import React from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

export const Error: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <div data-testid="error">404</div>
            <Footer />
        </>
    )
}
