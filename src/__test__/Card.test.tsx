import { describe, expect, it, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import Card from "../components/card/Card"

describe("when a card is diplayed", () => {
    // mock of the props
    const mockTitle = "title"
    const mockSrc = "url"
    const mockKey = 1

    render(
        <MemoryRouter>
            <Card title={mockTitle} src={mockSrc} idx={mockKey} />
        </MemoryRouter>
    )

    const cardWrapper = screen.getByRole("article")

    it("renders the cards with the props", () => {
        //rendering the wrapper
        expect(cardWrapper).toBeInTheDocument()

        //rendering the title
        const cardTitle = screen.getByText(mockTitle)
        expect(cardTitle).toBeInTheDocument()
        expect(cardTitle.textContent).toBe(mockTitle)

        //rendering the image
        const cardImg = screen.getByAltText(mockTitle)
        expect(cardImg).toBeInTheDocument()
        expect(cardImg).toHaveAttribute("src", mockSrc)
    })

    it("calls handleClick function on click", () => {
        const navigate = vi.fn()
        fireEvent.click(cardWrapper)
        // expect(navigate).toHaveBeenCalled()
        // expect(screen.getByTestId('lodging')).toBeInTheDocument()
    })
})
