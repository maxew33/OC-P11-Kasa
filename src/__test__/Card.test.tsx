import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import Card from "../components/card/Card"

describe("when a card is diplayed", async() => {
    // mock of the props
    const mockTitle = "title"
    const mockSrc = "url"
    const mockKey = "1"

    await render(
        <MemoryRouter>
            <Card title={mockTitle} src={mockSrc} id={mockKey} />
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

})
