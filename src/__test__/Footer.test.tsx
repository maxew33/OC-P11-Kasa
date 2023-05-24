import { describe, expect, it } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Footer from "../components/footer/Footer"

describe("when the footer is diplayed", () => {

    it("renders the footer with effective navigation link", () => {
        
        render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
        const link = screen.getByTestId("footer-link")

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/")
        fireEvent.click(link)
        expect(window.location.pathname).toBe("/")
    })
})