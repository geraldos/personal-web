import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";

import Loading from "./loading";

describe("Loading", () => {
  it("renders an accessible page loading skeleton", () => {
    render(createElement(Loading));

    expect(screen.getByRole("status", { name: "Loading page content" })).toBeInTheDocument();
    expect(screen.getByText("Loading page content")).toHaveClass("sr-only");
    expect(screen.getAllByTestId("loading-skeleton")).toHaveLength(12);
  });
});
