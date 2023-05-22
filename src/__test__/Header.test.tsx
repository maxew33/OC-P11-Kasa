import { describe, expect, it, beforeAll } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import { Header } from "../components/header/Header"

describe("when the header is diplayed", () => {
    beforeAll(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })

    it("renders the header with navigation links", () => {
        const homeNavLink = screen.getByTestId("home-navlink")
        const aboutNavLink = screen.getByTestId("about-navlink")

        expect(homeNavLink).toBeInTheDocument()
        expect(homeNavLink).toHaveAttribute("href", "/")
        expect(homeNavLink.textContent).toBe("Home")

        expect(aboutNavLink).toBeInTheDocument()
        expect(aboutNavLink).toHaveAttribute("href", "/about")
        expect(aboutNavLink.textContent).toBe("à Propos")
    })

    it("redirects to the correct page when a link is clicked", () => {
        const homeNavLink = screen.getByTestId("home-navlink")
        const aboutNavLink = screen.getByTestId("about-navlink")
        // Clic on "Home"
        fireEvent.click(homeNavLink)
        expect(window.location.pathname).toBe("/")

        // Clic on "à Propos"
        fireEvent.click(aboutNavLink)
        expect(window.location.pathname).toBe('/about')
    })
})