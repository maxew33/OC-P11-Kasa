import React from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

export const Lodging: React.FC<{}> = () => {
    return (
        <>
            <Header />
            
            <div data-testid="lodging">
                lodging
            </div>
            <Footer />
        </>
    )
}
