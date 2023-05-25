import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import Router from "../router/Router"

describe("when I change the route", () => {
    it('it should render Home page for "/" route', async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Router />
            </MemoryRouter>
        )

        // Vérifier que la page d'accueil est rendue
        expect(screen.getByTestId("home-page")).toBeInTheDocument()
    })

    it('it should render About page for "/about" route', async () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <Router />
            </MemoryRouter>
        )

        // Vérifier que la page "About" est rendue
        expect(screen.getByTestId("about")).toBeInTheDocument()
    })

    it('it should render Lodging page for "/lodging" route', async () => {
        render(
            <MemoryRouter initialEntries={["/lodging/0"]}>
                <Router />
            </MemoryRouter>
        )

        // Vérifier que la page "Lodging" est rendue
        expect(screen.getByTestId("lodging")).toBeInTheDocument()
    })

    it("it should render Error page for unknown routes", async () => {
        render(
            <MemoryRouter initialEntries={["/unknown"]}>
                <Router />
            </MemoryRouter>
        )

        // Vérifier que la page "Error" est rendue pour les routes inconnues
        expect(screen.getByTestId("error")).toBeInTheDocument()
    })
})