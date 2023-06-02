import { describe, expect, it, beforeAll } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Header from "../components/header/Header"

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
        expect(homeNavLink.textContent).toBe("Home")

        expect(aboutNavLink).toBeInTheDocument()
        expect(aboutNavLink.textContent).toBe("À propos")
    })

    it("redirects to the correct page when a link is clicked", () => {
        const homeNavLink = screen.getByTestId("home-navlink")
        const aboutNavLink = screen.getByTestId("about-navlink")
        const basePath = process.env.BASE_URL
        // Click on "Home"
        fireEvent.click(homeNavLink)
        expect(window.location.pathname).toBe(`${basePath}`)

        // Click on "à Propos"
        fireEvent.click(aboutNavLink)
        expect(window.location.pathname).toBe(`${basePath}about`)
    })
})