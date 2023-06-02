import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Router from "../router/Router";

describe("When the router is used", () => {
  const basePath = process.env.BASE_URL
  const testRoutes = [
    { path: `${basePath}`, component: "home-page" },
    { path: `${basePath}about`, component: "about" },
    { path: `${basePath}lodging/b9123946`, component: "lodging" },
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
