import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";

import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("throws when the provided current date is invalid", () => {
    expect(() =>
        render(createElement(HomePage, { currentDate: new Date("not-a-date") })),
    ).toThrow("Invalid current date");
  });

  it("renders computed experience and current year from the provided date", () => {
    render(createElement(HomePage, { currentDate: new Date("2026-11-20T00:00:00") }));

    expect(screen.getByText("6+ Years")).toBeInTheDocument();
    expect(screen.getByText(/Geraldo.*2026/)).toBeInTheDocument();
  });

  it("renders the primary proof of work entries", () => {
    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    expect(screen.getByText("M2U Web")).toBeInTheDocument();
    expect(screen.getByText("Backoffice platforms")).toBeInTheDocument();
    expect(screen.getByText("React Developer Learning Path")).toBeInTheDocument();
    expect(screen.getByText("Backend JavaScript Learning Path")).toBeInTheDocument();
  });
});
