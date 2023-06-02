import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Error from "../pages/error/Error"

describe("When I'm redirected on the error page", () => {
    it("should render the error page", () => {
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        )
        expect(screen.getByTestId("error")).toBeInTheDocument()
    })
})

