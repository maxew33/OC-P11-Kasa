import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import About from "../pages/about/About"

describe("When I'm redirected on the about page", () => {
    it("should render the about page", () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        )
        expect(screen.getByTestId("about")).toBeInTheDocument()
    })
})

