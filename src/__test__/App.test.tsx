import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'

import App from '../App'

it('renders Home page for "/" route', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )

  // Vérifier que la page d'accueil est rendue
  expect(await screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
})

it('renders About page for "/about" route', async () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  )

  // Vérifier que la page "About" est rendue
  expect(await screen.getByText(/ABOUTE/i)).toBeInTheDocument()
})

it('renders Lodging page for "/lodging" route', async () => {
  render(
    <MemoryRouter initialEntries={['/lodging']}>
      <App />
    </MemoryRouter>
  )

  // Vérifier que la page "Lodging" est rendue
  expect(await screen.getByText(/LODGING/i)).toBeInTheDocument()
})

it('renders Error page for unknown routes', async () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>
  )

  // Vérifier que la page "Error" est rendue pour les routes inconnues
  expect(await screen.getByText(/ERROR/i)).toBeInTheDocument()
})

// describe("App", () => {
//     it("should render with the title visible", () => {
//         render(<App />)
//         expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
//     })
// })

describe("test", () => {
    it("should be 3", () => {
        expect(1 + 2).toEqual(3)
    })
})
