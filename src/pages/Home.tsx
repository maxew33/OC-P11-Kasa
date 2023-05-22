import React from "react"
import { useState } from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

export const Home: React.FC<{}> = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <div data-testid="home-page">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <Footer />
        </>
    )
}
