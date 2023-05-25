import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Router from "../router/Router";

describe("Router", () => {
  const testRoutes = [
    { path: "/", component: "home-page" },
    { path: "/about", component: "about" },
    { path: "/lodging/b9123946", component: "lodging" },
    { path: "/404", component: "error" },
  ];

  testRoutes.forEach(({ path, component }) => {
    it(`renders ${component} page for "${path}" route`, async () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Router />
        </MemoryRouter>
      );

      expect(screen.getByTestId(component)).toBeInTheDocument();
    });
  });
});
