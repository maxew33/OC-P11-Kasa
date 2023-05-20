import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { About } from "../pages/About"

describe("App", () => {
    it("should render with the title visible", () => {
        render(<About />)
        expect(screen.getByText(/About/i)).toBeInTheDocument()
    })
})

describe("test", () => {
    it("should be 3", () => {
        expect(1 + 2).toEqual(3)
    })
})
