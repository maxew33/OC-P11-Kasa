import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Error: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <div>ERROR 404</div>
            <Footer />
        </>
    )
}
