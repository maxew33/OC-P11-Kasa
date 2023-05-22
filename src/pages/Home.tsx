import React from "react"
import { useState } from "react"

export const Home: React.FC<{}> = () => {
    const [count, setCount] = useState(0)

    return (
            <main data-testid="home-page">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </main>
    )
}
