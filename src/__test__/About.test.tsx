import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import About from "../pages/about/About"

describe("App", () => {
    it("should render with the title visible", () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        )
        expect(screen.getByText(/About/i)).toBeInTheDocument()
    })
})

describe("test", () => {
    it("should be 3", () => {
        expect(1 + 2).toEqual(3)
    })
})
